import { IForecast } from './IForecast.model';
/* eslint-disable @typescript-eslint/naming-convention */
export interface IPrevisao{
  cid: string;
  city: string;
  city_name: string;
  conditional_code: number;
  conditional_slug: string;
  currently: string;
  date: string;
  description: string;
  forecast: IForecast[];
  humidity: number;
  img_id: string;
  sunrise: string;
  sunset: string;
  temp: number;
  time: string;
  widn_speedy: string;
}
