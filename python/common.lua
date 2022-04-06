-- local SheetParser = require "SheetParser"
-- local SheetExporter = require "exporter.SheetExporter"



-- function Common_Main (excel, excel_name)
--     local sheet = excel.sheets()[0]
--     local object = SheetParser(sheet, excel.sheet_names()[0])
--     object.excel_name = excel_name
--     SheetExporter(object)
-- end

-- function FileWirte(str)
--     local index = 0
--     for s in string.gmatch(str, '(<table width="738".->.-</table>)') do
--         index = index + 1
--         local file = io.open("s"..index..".html", "w+")
--         file:write(s)
--         file:close()
--     end
--     return index
-- end


local str = "　　太平社区居委会地处市中心繁华地带，是莆田的政治、文化和商贸中心，辖区面积1.2平方公里，共有居民2562户，总人口8896人，下辖20个居民小组。辖区内"

local s, s1 = string.match(str, "人口(.+)人")

print(s, s1)