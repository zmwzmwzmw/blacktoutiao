import request from '@/utils/request'
export const getListApi = (_page, _limit) => request({
  url: '/articles',
  method: 'get',
  params: { _page, _limit }
})
