import { connectionOracle } from '../connections/oracledb';
import { User as UserPayload } from '../types/interfaces';
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const ENTORNO = process.env.ENV as string;
const TOKEN_NAME = process.env.TOKEN_NAME as string;

export async function getUsers(req: Request, res: Response) {
  try {
    await User.sync()
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener los usuarios', error })
  }
}

export async function Login(req: Request, res: Response) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son campos requeridos' })
  }

  try {
    const connection = await connectionOracle()

    if (connection instanceof Error) {
      return res.status(500).json({ message: 'Error al conectar a la base de datos', error: connection })
    }

    const { rows } = await connection.execute<string[]>(
      "SELECT get_authentication_msr(:password, :username) AS AUTH FROM dual",
      [password, username]
    )

    if (rows === undefined) {
      return res.status(500).json({ message: 'Error al obtener el usuario' })
    }

    const strResult = rows[0][0].split(',')

    console.log(strResult);

    if (strResult[0] === 'No data found') {
      return res.status(401).json({ message: 'Usuario no encontrado o no existe' })
    }

    if (strResult[0] === 'FALSE' && strResult[2] === 'A') {
      return res.status(401).json({ message: 'Contraseña incorrecta' })
    }

    if (strResult[0] === 'TRUE' && strResult[2] === 'B') {
      return res.status(401).json({ message: 'Usuario se encuentra bloqueado' })
    }

    const user = {
      sucursal: strResult[1],
      username: username as string,
    }

    jwt.sign(user, JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error al generar el token', err })
      }

      return res.cookie(TOKEN_NAME, token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'lax',
        secure: ENTORNO !== 'dev' ? true : false
      })
        .status(200)
        .json({ message: 'Usuario autenticado correctamente' })
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el usuario', error })
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const { codigo, nombres, username } = req.user as UserPayload

    return res.status(200).json({ codigo, nombres, username })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener el perfil', error })
  }
}

export async function Logout(req: Request, res: Response) {
  try {
    return res.cookie(TOKEN_NAME, '', {
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'lax',
      secure: ENTORNO !== 'dev' ? true : false
    })
      .status(200)
      .json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al cerrar la sesión', error });
  }
}