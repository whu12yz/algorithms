--
-- @lc app=leetcode.cn id=177 lang=mysql
--
-- [177] 第N高的薪水
--
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  Declare M INT;
  Set M = N-1;
  RETURN (
      # Write your MySQL query statement below.
      select distinct Salary from Employee
      order by Salary DESC
      limit M, 1
      
  );
END

