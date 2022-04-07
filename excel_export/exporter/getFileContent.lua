local prop_template = "%s=%s"

---@param prop Sheet_Property
---@param value any
---@return string
local getValueStr = function (prop, value)
    if prop.type == "number" then
        if value == "" then
            value = 0
        end
        return math.ceil(tonumber(value or 0))
    elseif prop.type == "number[]" then
        return string.format("{%s}", string.gsub(value, ";", ","))
    elseif prop.type == "string" then
        return string.format('"%s"', value)
    end
end

---@param prop Sheet_Property
---@param value any
---@return string
local getPropertyStr = function (prop, value)
    return prop_template:format(prop.name, getValueStr(prop, value))
end

---@param properties Sheet_Property[]
---@param item any
---@return string
local getItemStr = function (properties, item)
    local list = {}
    local itemId = nil
    for _, prop in pairs(properties) do
        table.insert(list, getPropertyStr(prop, item[prop.name]))
        if prop.name == "index" then
            itemId = getValueStr(prop, item[prop.name])
        end
    end
    return string.format("[%d] = {%s}", itemId, table.concat(list, ","))
end

---实际内容
---@param object SheetObject
---@return string
local getContentStr = function (object)
    local list = {}
    for _, item in pairs(object.itemList) do
        table.insert(list, getItemStr(object.properties, item))
    end
    return table.concat(list, ",\n")
end


local file_content_template = [[

---@type CLASS_NAME[]
local LUA_NAME = {
CONTENT_LIST
};return LUA_NAME
]]



---文件内容
---@param object SheetObject
---@return string
local getFileContent = function (object)
    local str = string.gsub(file_content_template, "CLASS_NAME", object.lua_class_name)
    str = string.gsub(str, "LUA_NAME", object.lua_name)
    str = string.gsub(str, "CONTENT_LIST", getContentStr(object))
    return str
end

return getFileContent