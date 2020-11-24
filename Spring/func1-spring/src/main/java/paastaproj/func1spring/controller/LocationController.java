package paastaproj.func1spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import paastaproj.func1spring.domain.Location;
import paastaproj.func1spring.service.LocationService;

import java.util.LinkedList;
import java.util.List;

@Controller
public class LocationController {
    private final LocationService locationService;



    public LocationController(LocationService locationService){
        this.locationService=locationService;
    }

    //위치받아오기
    @GetMapping("/locations/save")
    public String createForm(){
        return "locations/locationSave";
    }
    //위치저장
    @PostMapping("/locations/save")
    public String save(LocationForm form){
        Location location = new Location();
        location.setLatitude(form.getLatitude());
        location.setLongitude(form.getLongitude());
        locationService.save(location);
        return "redirect:/";
    }
    //위치목록

    @GetMapping("/locations")
    public String list(Model model){
        List<Location> locations = locationService.showAll();
        model.addAttribute("locations",locations);
        return "locations/locationList";
    }

    @GetMapping("/maps")
    public String map(Model model){
        List<Location> locations = locationService.showAll();

        String lat_src = locations.get(0).getLatitude();
        //System.out.println(lat_src);
        String lng_src = locations.get(0).getLongitude();
        //System.out.println(lng_src);
        String lat_dest = locations.get(locations.size()-1).getLatitude();
        //System.out.println(lat_dest);
        String lng_dest = locations.get(locations.size()-1).getLongitude();
        //System.out.println(lng_dest);

        String[] path_arr = null;

        try {
            path_arr = locationService.sendGet("https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start="
                    + lng_src + "," + lat_src + "&goal=" + lng_dest + "," + lat_dest + "&option=trafast");
        }catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("locations",path_arr);

        return "locations/map";
    }

}
