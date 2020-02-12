import { getApi } from '@/services/server';

export async function chk() {
  return getApi('chk');
}
