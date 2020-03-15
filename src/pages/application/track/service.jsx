import { getApi } from '@/services/server';

export async function track() {
  return getApi('track');
}
