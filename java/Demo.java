import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


class Demo{
    public static void main(String args[]){
        
        try{
                URL url = new URL("https://restcountries.com/v3.1/name/{name}");

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            //Getting the response code
            int responsecode = conn.getResponseCode();
            
            if (responsecode != 200) {
                throw new RuntimeException("HttpResponseCode: " + responsecode);
            } else {
            
                String inline = "";
                Scanner scanner = new Scanner(url.openStream());
            
            //Write all the JSON data into a string using a scanner
                while (scanner.hasNext()) {
                inline += scanner.nextLine();
                }
                
                //Close the scanner
                scanner.close();

                //Using the JSON simple library parse the string into a json object
                JSONParser parse = new JSONParser();
                JSONObject data_obj = (JSONObject) parse.parse(inline);

                //Get the required object from the above created object
                JSONObject obj = (JSONObject) data_obj.get("name");

                //Get the required data using its key
                System.out.println(obj);
            }
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}