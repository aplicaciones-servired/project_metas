import { JwtPayload } from 'jsonwebtoken'

export interface ProductsYumbo {
  ASTRO: number
  CHANCE: number
  CHANCE_MILLONARIO: number
  DOBLECHANCE: number
  PAGAMAS: number
  BETPLAY: number
  PAGATODO: number
  RECARGAS: number
  PROMO1: number
  GANE5: number
  PATA_MILLONARIA: number
  LOTERIA_VIRTUAL: number
  LOTERIA_FISICA: number
  PROMO2: number
  SOAT: number
  GIROS: number
  RECAUDOS: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_PAGAMAS: number
  PROMEDIO_DIARIO_PAGATODO: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_RECARGAS: number
  PROMEDIO_DIARIO_LV: number
  MT_CHANCE: number
  MT_PAGAMAS: number
  MT_PAGATODO: number
  MT_GANE5: number
  MT_PATA_MILLONARIA: number
  MT_DOBLECHANCE: number
  MT_CHANCE_MILLONARIO: number
  MT_ASTRO: number
  MT_LOTERIA_FISICA: number
  MT_LOTERIA_VIRTUAL: number
  MT_BETPLAY: number
  MT_GIROS: number
  MT_SOAT: number
  MT_RECAUDOS: number
  MT_RECARGAS: number
  META_PROMO2: number
  META_PROMO1: number
}

export interface ProductsJamundi {
  CHANCE: number
  GANE5: number
  PAGATODO_JAMUNDI: number
  CHOLADITO: number
  DOBLECHANCE: number
  CHANCE_MILLONARIO: number
  PATA_MILLONARIA: number
  ASTRO: number
  LOTERIA_FISICA: number
  LOTERIA_VIRTUAL: number
  BETPLAY: number
  GIROS: number
  SOAT: number
  RECAUDOS: number
  RECARGAS: number
  PROMO1: number
  PROMO2: number
  MT_CHANCE: number
  MT_GANE5: number
  MT_PAGATODO_JAMUNDI: number
  MT_CHOLADITO: number
  MT_PATA_MILLONARIA: number
  MT_DOBLECHANCE: number
  MT_CHANCE_MILLONARIO: number
  MT_ASTRO: number
  MT_LOTERIA_FISICA: number
  MT_LOTERIA_VIRTUAL: number
  MT_BETPLAY: number
  MT_GIROS: number
  MT_SOAT: number
  MT_RECAUDOS: number
  MT_RECARGAS: number
  META_PROMO1: number
  META_PROMO2: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PGTJAMUNDI: number
  PROMEDIO_DIARIO_CHOLADITO: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_LV: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_RECARGAS: number
}

export interface IProduct {
  id: number
  producto: string
  ventaActual: number
  aspiracionDia: number
  porcentaje: number
  porcentaje2: number
}

interface User extends JwtPayload {
  sucursal: number;
  username: string;
  zona: number;
}