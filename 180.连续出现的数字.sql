--
-- @lc app=leetcode.cn id=180 lang=mysql
--
-- [180] 连续出现的数字
--
# Write your MySQL query statement below


SELECT distinct l1.Num ConsecutiveNums from Logs l1
left join Logs l2 on l1.Id = l2.Id - 1
left join Logs l3 on l1.Id = l3.Id - 2
WHERE l1.Num = l2.Num and l2.Num = l3.Num
 
