import gbRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return gbRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
