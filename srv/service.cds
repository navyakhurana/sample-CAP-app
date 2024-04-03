using { cap.test.db as db  } from '../db/schema';


service MyService {

entity Roots as projection on db.Roots;   
entity OtherRoots as projection on db.OtherRoots; 

}
