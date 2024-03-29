INSERT INTO `stock_info` (`stock_name`,
  `recent_price`,
  `purchase_price`,
  `10_day_price`,
  `monthly_price`,
  `quantity`,
  `purchase_date`,
  `sell_date`,
  `todays_date`)

VALUES
  ("Tesla", "199", "195.86", "200", "205", "1", "2/24/2023", "3/29/2023", curdate()),
  ("Microsoft", "230", "283.34", "233", "244", "1", "1/14/2023", "3/19/2023", curdate()),
  ("Johnson & Johnson", "163.99", "153.44", "145", "187", "1", "1/09/2023", "2/28/2023", curdate()),
  ("Apple", "140", "162.07", "150", "155", "3", "11/14/2022", "3/10/2023", curdate()),
  ("American Express", "133.34", "162.43", "162.90", "171.97", "2", "1/12/2022", "1/03/2023", curdate());