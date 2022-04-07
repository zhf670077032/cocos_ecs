local SheetParser = require "parser.SheetParser"
local SheetExporter = require "exporter.SheetExporter"



function Main (excel, excel_name, sheet_count)
    for i = 0, sheet_count - 1, 1 do
        local sheet = excel.sheets()[i]
        local object = SheetParser(sheet, excel.sheet_names()[i])
        object.excel_name = excel_name
        SheetExporter(object)
    end

    -- local sheet = excel.sheets()[2]
    -- local object = SheetParser(sheet, excel.sheet_names()[2])
    -- object.excel_name = excel_name

    -- print(object.max_col, object.max_row)

    -- SheetExporter(object)
end