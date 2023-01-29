import gbRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return gbRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return gbRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return gbRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return gbRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
