--
-- @lc app=leetcode.cn id=178 lang=mysql
--
-- [178] 分数排名
--
# Write your MySQL query statement below
select Score,
(select count(distinct Score) from Scores WHERE Score >=s.Score) Rank
from Scores s order by Score DESC;




