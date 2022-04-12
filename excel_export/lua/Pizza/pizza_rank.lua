--[[

@file:pizza_rank.lua
@source xls:./excel/Pizza.xlsx
@sheet name:S__pizza_rank
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaRank @类型注解
---@field public index			number		@序列
---@field public activityID		number		@活动ID
---@field public activityType	number		@活动类型
---@field public rank			number[]		@排名区间
---@field public reward			number[]		@排名奖励
---@field public rankType		number		@同一个活动不同排行榜的标识

--#endregion


---@type table<number, PizzaRank>
local pizza_rank = {
[1] = {index=1,activityID=9001271,activityType=1,rank={1,1},reward={416937,1,706570,10,811621,40,100903,40},rankType=0},
[2] = {index=2,activityID=9001271,activityType=1,rank={2,2},reward={416937,1,706570,6,811621,30,100903,30},rankType=0},
[3] = {index=3,activityID=9001271,activityType=1,rank={3,3},reward={416937,1,706570,5,811621,25,100903,25},rankType=0},
[4] = {index=4,activityID=9001271,activityType=1,rank={4,6},reward={816440,1,706570,4,811621,20,100903,20},rankType=0},
[5] = {index=5,activityID=9001271,activityType=1,rank={7,10},reward={816440,1,706570,3,811621,15,100903,15},rankType=0},
[6] = {index=6,activityID=9001271,activityType=1,rank={11,20},reward={816440,1,706570,2,811621,10,100903,10},rankType=0},
[7] = {index=7,activityID=9001271,activityType=1,rank={21,30},reward={816440,1,706570,1,811621,8,100903,8},rankType=0},
[8] = {index=8,activityID=9001271,activityType=1,rank={31,50},reward={816440,1,706570,1,811621,6,100903,6},rankType=0},
[9] = {index=9,activityID=9001271,activityType=1,rank={51,70},reward={811621,4,100903,4,500602,8},rankType=0},
[10] = {index=10,activityID=9001271,activityType=1,rank={71,100},reward={811621,2,100903,2,500602,5},rankType=0}
};return pizza_rank
