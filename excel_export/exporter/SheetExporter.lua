local getFileTitle = require "exporter.getFileTitle"
local getClassNotes = require "exporter.getClassNotes"
local getFileContent = require "exporter.getFileContent"

local export_template = "--[[\nFILE_TITLE\n]]--\n\nCLASS_NOTES\nFILE_CONTENT"

---@param object SheetObject
---@return string
local getExportLuaName = function (object)
    local folder = string.gsub(object.excel_name, "./excel", "lua")
    folder = string.gsub(folder, ".xlsx", "")

    return folder, object.lua_name .. ".lua"
end


local createFile = function(folder_name, file_name)
    local path_tb={}
    -- 分割路径保存到table
    for s in string.gmatch(folder_name,"([^'/']+)") do
        if s~=nil then
            table.insert(path_tb,s)
        end
    end
    local new_path = ""
    -- -- 遍历并拼接路径检测是否存在，不存在则新建
    for k,v in ipairs(path_tb) do
        if k==1 then
            new_path=v
        else
            new_path=new_path.."/"..v
        end
        if not os.execute("cd "..new_path) then
            os.execute("mkdir "..new_path)
        end
    end

    return io.open("./"..folder_name.."/"..file_name, "w+")
end




---导出
---@param object SheetObject
local SheetExporter = function (object)
    local export_str = string.gsub(export_template, "FILE_TITLE", getFileTitle(object))
    export_str = string.gsub(export_str, "CLASS_NOTES", getClassNotes(object))
    export_str = string.gsub(export_str, "FILE_CONTENT", getFileContent(object))
    -- print(export_str)

    local folder_name, file_name = getExportLuaName(object)
    local file = createFile(folder_name, file_name)
    file:write(export_str)
    file:close()
end

return SheetExporter