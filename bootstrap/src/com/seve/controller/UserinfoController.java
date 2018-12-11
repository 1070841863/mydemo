package com.seve.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.seve.entity.Userinfo;
import com.seve.service.UserinfoService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("userinfo.do")
@Scope("prototype")
public class UserinfoController
{
    @Autowired
    private UserinfoService userinfoService;
    
    @RequestMapping(params="method=myall")
    public String myall()
    {
        return "userinfo/all";
    }
    
    @ResponseBody
    @RequestMapping(params="method=all")
    public String all(int limit,int offset)
    {
        JSONObject obj=new JSONObject();
        try
        {
            
            //中文乱码问题
//            String mysex = URLDecoder.decode(sex, "UTF-8");
        
            //System.out.println(offset+"  "+limit+"  "+mysex+"  "+age);

            Userinfo  userinfo=new Userinfo();
            userinfo.setBegin(offset);
            userinfo.setPagesize(limit);
            //得到共有多少条记录
            int count=userinfoService.getcount();
            //得到分页查询的结果集
            List<Userinfo> ar=userinfoService.getall(userinfo);
            
            obj.put("rows", ar);
            obj.put("total",count);
            
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return obj.toString();
    }
}
