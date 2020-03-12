import { getApi } from '@/services/server';

export async function track() {
  return getApi('chk/mq?topic=1&text=' + new Date().toTimeString());
}
