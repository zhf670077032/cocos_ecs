local file_title_template = [[

@file:LUA_NAME.lua
@source xls:EXCEL_NAME
@sheet name:SHEET_NAME
@brief:
@author:AUTHOR
]]

---文件头
---@param object SheetObject
---@return string
local getFileTitle = function (object)

    local str = string.gsub(file_title_template, "LUA_NAME", object.lua_name)
    str = string.gsub(str, "EXCEL_NAME", object.excel_name)
    str = string.gsub(str, "SHEET_NAME", object.sheet_name)
    return str
end

return getFileTitle