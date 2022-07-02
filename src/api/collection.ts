import _ from 'lodash'
import Base from '~/src/api/base'
import * as TypeCollection from '~/src/type/zhihu/collection'

class Collection extends Base {
  /**
   * 获取收藏夹内回答摘要列表
   * @param offset
   * @param limit
   */
  static async asyncGetAnswerExcerptList(
    colectionId: number | string,
    offset: number = 0,
    limit: number = 20,
  ): Promise<Array<TypeCollection.AnswerExcerpt>> {
    const baseUrl = `https://api.zhihu.com/collections/${colectionId}/answers`
    const config = {
      offset: offset,
      limit: limit,
    }
    const record = await Base.http.get(baseUrl, {
      params: config,
    })
    const answerList = _.get(record, ['data'], [])
    return answerList
  }

  /**
   * 获取收藏夹信息
   * @param collectionId
   */
  static async asyncGetCollectionInfo(collectionId: number | string): Promise<TypeCollection.Info> {
    const baseUrl = `https://api.zhihu.com/collections/${collectionId}`
    const config = {}
    const rawCollectionInfoRecord: any = await Base.http.get(baseUrl, {
      params: config,
    })
    const collectionInfoRecord = rawCollectionInfoRecord?.collection ?? {}
    return collectionInfoRecord
  }
}
export default Collection
