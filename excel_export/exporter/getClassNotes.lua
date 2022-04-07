--\t字符补充
local getTabStrByCount = function (count)
    local tab_list = {}
    for i = 1, count, 1 do
        table.insert(tab_list, "\t")
    end
    return table.concat(tab_list)
end

local field_template = "---@field public FIELD_NAMETAB_LISTFIELD_TYPE\t\t@NOTES"
local class_template = "---@class CLASS_NAME @类型注解"
local table_template = [[
CLASS_TEMPLATE
FIELD_TEMPLATE
]]
local class_notes_template = [[
--#region 类型注解

CLASS_NOTE_CONTENT
--#endregion
]]

---类型注解
---@param object SheetObject
---@return string
local getClassNotes = function (object)
    local class_str = string.gsub(class_template, "CLASS_NAME", object.lua_class_name)
    local filed_str_list = {}

    local key_max_len = 0
    for key, value in pairs(object.properties) do
        key_max_len = math.max(key_max_len, #value.name)
    end
    key_max_len = math.ceil((key_max_len + 2) / 4) * 4

    for key, value in pairs(object.properties) do
        local str = string.gsub(field_template, "FIELD_NAME", value.name)
        local tab_count = math.ceil((key_max_len - #value.name - 1) / 4)
        str = string.gsub(str, "TAB_LIST", getTabStrByCount(tab_count))
        str = string.gsub(str, "FIELD_TYPE", value.type)

        if value.content:find("%s") then
            str = string.gsub(str, "NOTES", string.gsub(value.content, "%s", " "))
        else
            str = string.gsub(str, "NOTES", value.content)
        end
        table.insert(filed_str_list, str)
    end

    local field_str = ""
    if #filed_str_list > 0 then
        field_str = table.concat(filed_str_list, "\n")
    end


    local type_note_str = string.gsub(table_template, "CLASS_TEMPLATE", class_str)
    type_note_str = string.gsub(type_note_str, "FIELD_TEMPLATE", field_str)
    return string.gsub(class_notes_template, "CLASS_NOTE_CONTENT", type_note_str)
end

return getClassNotes