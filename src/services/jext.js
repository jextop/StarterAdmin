import { getApi } from '@/services/server';

export async function info() {
  return getApi('jext');
}
