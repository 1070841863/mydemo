package com.seve.service;

import com.seve.entity.Userinfo;
import java.math.BigDecimal;
import java.util.List;

public interface UserinfoService {
    int deleteByPrimaryKey(Integer uuid);

    int insert(Userinfo record);

    int insertSelective(Userinfo record);

    Userinfo selectByPrimaryKey(Integer uuid);

    int updateByPrimaryKeySelective(Userinfo record);

    int updateByPrimaryKey(Userinfo record);
    
    public List<Userinfo> getall(Userinfo userinfo);
    
    public int getcount();
}