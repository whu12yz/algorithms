--
-- @lc app=leetcode.cn id=184 lang=mysql
--
-- [184] 部门工资最高的员工
--
# Write your MySQL query statement below


select d.Name Department ,e1.Name Employee,e1.Salary Salary 
from Employee e1
inner join Department d on e1.DepartmentId= d.Id
where e1.Salary in (select Max(e2.Salary) from Employee e2 where e2.DepartmentId =e1.DepartmentId)



