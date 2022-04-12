--[[

@file:pizza_config.lua
@source xls:./excel/Pizza.xlsx
@sheet name:S__pizza_config
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaConfig @类型注解
---@field public index		number		@战甲ID
---@field public reward		number[]		@战甲对应的奖励道具的ID及数量
---@field public integral	number		@战甲对应的熔铸积分
---@field public record		number		@是否在熔铸日志中记录 1=记录 0=不记录

--#endregion


---@type table<number, PizzaConfig>
local pizza_config = {
[1] = {index=1,reward={500602,5},integral=72,record=0},
[2] = {index=2,reward={811891,5},integral=95,record=0},
[3] = {index=3,reward={811042,5},integral=118,record=0},
[4] = {index=4,reward={811892,3},integral=231,record=0},
[6] = {index=6,reward={811893,2},integral=678,record=1},
[7] = {index=7,reward={812033,1},integral=988,record=1}
};return pizza_config
