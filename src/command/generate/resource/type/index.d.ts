import * as Consts from '../const/index'
import * as Types from '~/src/type/task_config'

import * as Type_Activity from '~/src/type/zhihu/activity'
import * as Type_Answer from '~/src/type/zhihu/answer'
import * as Type_Article from '~/src/type/zhihu/article'
import * as Type_Author from '~/src/type/zhihu/author'
import * as Type_Collection from '~/src/type/zhihu/collection'
import * as Type_Column from '~/src/type/zhihu/column'
import * as Type_Pin from '~/src/type/zhihu/pin'
import * as Type_Question from '~/src/type/zhihu/question'
import * as Type_Topic from '~/src/type/zhihu/topic'

// 基本设计思路
// 页的上一级是单元, 每个单元的顺序为: 单元信息页 + 后续问题/文章/想法页
// 单元的上一级是卷, 每个卷中可包含多个单元
// 卷中页码容量不能超过限制, 如果超过, 需要将溢出单元拆分为两个单元, 归属到下一卷

type Type_Item_Question = typeof Consts.Const_Type_Question
type Type_Item_Article = typeof Consts.Const_Type_Article
type Type_Item_Pin = typeof Consts.Const_Type_Pin

type Type_Item_Type = Type_Item_Question | Type_Item_Article | Type_Item_Pin

type Type_Page_Question_Item = {
  type: Type_Item_Question
  baseInfo: Type_Answer.Question
  recordList: Type_Answer.Record[]
}

type Type_Page_Article_Item = {
  type: Type_Item_Article
  record: Type_Article.Record
}

type Type_Page_Pin_Item = {
  type: Type_Item_Pin
  record: Type_Pin.Record
}

// 实际的item元素-对应每一页的内容
export type Type_Page_Item = Type_Page_Question_Item | Type_Page_Article_Item | Type_Page_Pin_Item

export type Type_Unit_Item_收藏夹 = {
  type: Type_Task_Type_收藏夹
  info: Type_Collection.Info
  page: Type_Page_Item[]
}

export type Type_Unit_Item_话题 = {
  type: Types.Type_Task_Type_话题
  info: Type_Topic.Info
  page: Type_Page_Item[]
}

export type Type_Unit_Item_专栏 = {
  type: Types.Type_Task_Type_专栏
  info: Type_Column.Info
  page: Type_Page_Item[]
}

export type Type_Unit_Item_用户 = {
  type: Types.Type_Author_Collection_Type
  info: Type_Author.Info
  pageList: Type_Page_Item[]
}

/**
 * 混合类型, 用于收容非上述四种基本类型的数据(独立的回答/问题/想法/文章). 仅结集, 不提供单独的信息页
 */
export type Type_Unit_Item_混合类型 = {
  type: Types.Type_Task_Type_混合类型
  page: Type_Page_Item[]
}

/**
 * 单元类型
 */
export type Type_Unit_Item = Type_Unit_Item_收藏夹 | Type_Unit_Item_话题 | Type_Unit_Item_专栏 | Type_Unit_Item_用户

/**
 * 电子书分卷信息
 */
export type Type_Ebook_Column_Item = {
  /**
   * 电子书名
   */
  bookname: string
  /**
   * 分卷信息
   */
  unitList: Type_Unit_Item[]
}
