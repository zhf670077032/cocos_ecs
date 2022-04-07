
--#region

---@class Sheet_Property
---@field name string   属性名
---@field type string   属性类型
---@field content string   属性注解
---@field coln number   属性所在列

--#endregion


local getValue = function (object, row, col)
    return object.sheet.cell_value(row, col)
end

local dealMaxRC = function (sheet)
    return sheet.nrows - 1, sheet.ncols - 1
end


local dealStartRC = function (self)
    local start_row, start_col = -1, -1
    for row = 0, self.max_row, 1 do
        for col = 0, self.max_col, 1 do
            if #self:getValue(row, col) > 0 then
                start_col = col
                break
            end
        end
        if start_col ~= -1 then
            start_row = row
            break
        end
    end
    return start_row, start_col
end


local typeSwitch = function (type_str)
    if type_str == "digit array" then
        return "number[]"
    elseif type_str == "digit" then
        return "number"
    elseif type_str == "string" then
        return "string"
    else
        return "any"
    end
end

local dealProperties = function (self)
    local properties = {}

    for col = self.start_col, self.max_col, 1 do
        local name = self:getValue(self.start_row, col)
        if name ~= "" and not name:find("#") then
            table.insert(properties, {
                name    = name,
                type    = typeSwitch(self:getValue(self.start_row + 2, col)),
                content = self:getValue(self.start_row + 3, col),
                coln    = col
            })
        else
            -- if name == "" then
            -- else

            --     print("")
            -- end
        end
    end
    return properties
end

--判断这一行能不能导出
local theLineCanExport = function (self, row)
    for col = 0, self.start_col, 1 do
        if tostring(self:getValue(row, col)):find("#") then
            return false
        end
    end

    local empty = true
    for i = 0, self.max_col - 1, 1 do
        if tostring(self:getValue(row, i)) ~= "" then
            empty = false
            break
        end
    end
    return not empty
end

local dealItems = function (self)
    local itemList = {}
    for row = self.start_row+4, self.max_row, 1 do
        if theLineCanExport(self, row) then
            local item = {}
            for _, prop in pairs(self.properties) do
                item[prop.name] = self:getValue(row, prop.coln)
            end
            table.insert(itemList, item)
        end
    end
    return itemList
end


--首字母大写
local firstToUpper = function (str)
    return str:gsub("^%l", string.upper)
end

--规范化类型名
local toClassName = function (clsName)
    local list = {}

    local s = string.gsub(clsName, '[^_]+', function (w)
        table.insert(list, w)
    end)
    
    for index, value in ipairs(list) do
        list[index] = firstToUpper(value)
    end

    return table.concat(list)
end

---excel的sheet解析
---@param sheet any
---@param sheet_name string
---@return SheetObject
local SheetParser = function (sheet, sheet_name)
    ---@class SheetObject
    local object = {
        sheet = sheet,      ---@type any
        max_row = nil,      ---@type number 最大行
        max_col = nil,      ---@type number 最大列
        start_row = nil,    ---@type number 表格真正的起始行
        start_col = nil,    ---@type number 表格真正的起始列
        lua_name = nil,     ---@type string 表格导出的lua名
        sheet_name = nil,   ---@type string 表格的sheet名
        excel_name = nil,   ---@type string 表格的excel名
        lua_class_name=nil, ---@type string 表格导出项的类型名
        cfg_type = nil,     ---@type string 类型值，C表示客户端，S表示服务端
        properties = nil,   ---@type Sheet_Property[]    去掉注释后的属性
        itemList = nil,     ---@type any    去掉注释后的项
        getValue = getValue ---@type function
    }

    object.lua_name = string.gsub(sheet_name, "^%w__", "")
    object.lua_class_name = toClassName(object.lua_name)
    object.sheet_name = sheet_name
    object.excel_name = "excel_name"
    object.max_row, object.max_col = dealMaxRC(sheet)
    object.start_row, object.start_col = dealStartRC(object)
    object.properties = dealProperties(object)
    object.itemList = dealItems(object)
    return object
end


return SheetParser