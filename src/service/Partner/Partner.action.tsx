import PartnerDataService from './Partner.service';
export function PartnerAc(countryId?: number) {
  return PartnerDataService.partner(countryId);
}
export async function PartnerIdAc(id: number) {
  return await PartnerDataService.partnerId(id);
}
