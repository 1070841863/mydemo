package com.seve.impl;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seve.dao.UserinfoMapper;
import com.seve.entity.Userinfo;
import com.seve.service.UserinfoService;

@Service
public class UserinfoImpl implements UserinfoService
{
    @Autowired
    private UserinfoMapper userinfoMapper;
    @Override
    public int deleteByPrimaryKey(Integer uuid)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.deleteByPrimaryKey(uuid);
    }

    @Override
    public int insert(Userinfo record)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.insert(record);
    }

    @Override
    public int insertSelective(Userinfo record)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.insertSelective(record);
    }

    @Override
    public Userinfo selectByPrimaryKey(Integer uuid)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.selectByPrimaryKey(uuid);
    }

    @Override
    public int updateByPrimaryKeySelective(Userinfo record)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Userinfo record)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Userinfo> getall(Userinfo userinfo)
    {
        // TODO Auto-generated method stub
        return userinfoMapper.getall(userinfo);
    }

    @Override
    public int getcount()
    {
        // TODO Auto-generated method stub
        return userinfoMapper.getcount();
    }

}
