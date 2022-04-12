--[[

@file:pizza_type.lua
@source xls:./excel/Pizza.xlsx
@sheet name:C__pizza_type
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaType @类型注解
---@field public index				number		@序列
---@field public activityType		number		@活动类型
---@field public activityName		string		@活动名称
---@field public activityIcon		string		@活动图标
---@field public activityShowIcon	string		@活动详情界面上的icon
---@field public ruleDes			string		@活动规则描述
---@field public itemShow			number		@每日任务分页展示的道具ID
---@field public itemDes			string		@每日任务分页的描述
---@field public task				number[]		@关联的任务ID

--#endregion


---@type table<number, PizzaType>
local pizza_type = {
[1] = {index=1,activityType=1,activityName="pizza_activityname_01",activityIcon="Activity_pizzadazuozhan.png",activityShowIcon="pizzadazuozhang_caipu.png",ruleDes="pizza_text_29",itemShow=816446,itemDes="pizza_text_30",task={4114754,4114755,4114756,4114757,4114758,4114759,4114760,4114761,4114762,4114763,4114764,4114765,4114766,4114767,4114768}}
};return pizza_type
