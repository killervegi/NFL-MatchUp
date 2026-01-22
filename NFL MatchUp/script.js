// NFL MatchUp - full script with strict HOF/Position rules

const teams = [
  "49ers","Bears","Bengals","Bills","Broncos","Browns","Buccaneers","Cardinals",
  "Chargers","Chiefs","Colts","Cowboys","Dolphins","Eagles","Falcons","Giants",
  "Jaguars","Jets","Lions","Packers","Panthers","Patriots","Raiders","Rams",
  "Ravens","Saints","Seahawks","Steelers","Texans","Titans","Vikings","Commanders"
];

const positions = ["QB","RB","WR","TE","OT","IOL","LB","DL","CB","S","K","P"];

const teamColors = {
  "49ers": ["#AA0000", "#B3995D"], "Bears": ["#0B162A", "#C83803"], "Bengals": ["#FB4F14", "#000000"],
  "Bills": ["#00338D", "#C60C30"], "Broncos": ["#002244", "#FB4F14"], "Browns": ["#311D00", "#FF3C00"],
  "Buccaneers": ["#D50A0A", "#34302B"], "Cardinals": ["#97233F", "#FFB612"], "Chargers": ["#002A5E", "#FFC20E"],
  "Chiefs": ["#E31837", "#FFB81C"], "Colts": ["#002C5F", "#A2AAAD"], "Cowboys": ["#003594", "#869397"],
  "Dolphins": ["#008E97", "#FC4C02"], "Eagles": ["#004C54", "#A5ACAF"], "Falcons": ["#A71930", "#000000"],
  "Giants": ["#0B2265", "#A71930"], "Jaguars": ["#006778", "#D7A22A"], "Jets": ["#125740", "#FFFFFF"],
  "Lions": ["#0076B6", "#B0B7BC"], "Packers": ["#203731", "#FFB612"], "Panthers": ["#0085CA", "#101820"],
  "Patriots": ["#002244", "#C60C30"], "Raiders": ["#000000", "#A5ACAF"], "Rams": ["#003594", "#FFD100"],
  "Ravens": ["#241773", "#9E7C0C"], "Saints": ["#D3BC8D", "#101820"], "Seahawks": ["#002244", "#69BE28"],
  "Steelers": ["#101820", "#FFB612"], "Texans": ["#03202F", "#A71930"], "Titans": ["#4B92DB", "#C8102E"],
  "Vikings": ["#4F2683", "#FFC62F"], "Commanders": ["#5A1414", "#FFB612"]
};

const players = [
  {name:"Jerry Rice", teams:["49ers","Raiders","Seahawks"], position:"WR", hof:true},
  {name:"Joe Montana", teams:["49ers","Chiefs"], position:"QB", hof:true},
  {name:"Deion Sanders", teams:["Falcons","Cowboys","49ers"], position:"CB", hof:true},
  {name:"Walter Payton", teams:["Bears"], position:"RB", hof:true},
  {name:"Dre Greenlaw", teams:["49ers"], position:"LB", hof:false},
  {name:"Aaron Rodgers", teams:["Packers"], position:"QB", hof:false},
  {name:"Patrick Mahomes", teams:["Chiefs"], position:"QB", hof:false},
  {name:"Derrick Henry", teams:["Titans"], position:"RB", hof:false},
  {name:"Tom Brady", teams:["Patriots","Buccaneers"], position:"QB", hof:true},
  {name:"Emmitt Smith", teams:["Cowboys"], position:"RB", hof:true},
  {name:"Reggie White", teams:["Bears","Packers"], position:"DL", hof:true},
  {name:"Lawrence Taylor", teams:["Giants"], position:"LB", hof:true},
  {name:"Jim Brown", teams:["Browns"], position:"RB", hof:true},
  {name:"Rob Gronkowski", teams:["Patriots","Buccaneers"], position:"TE", hof:false},
  {name:"Russell Wilson", teams:["Seahawks","Broncos"], position:"QB", hof:false},
  {name:"Aaron Donald", teams:["Rams"], position:"DL", hof:false},
  {name:"J.J. Watt", teams:["Texans","Cardinals"], position:"DL", hof:false},
  {name:"Tyreek Hill", teams:["Chiefs","Dolphins"], position:"WR", hof:false},
  {name:"Davante Adams", teams:["Packers","Raiders"], position:"WR", hof:false},
  {name:"Patrick Peterson", teams:["Cardinals","Saints"], position:"CB", hof:false},
  {name:"Christian McCaffrey", teams:["Panthers","49ers"], position:"RB", hof:false},
  {name:"DeAndre Hopkins", teams:["Texans","Cardinals"], position:"WR", hof:false},
  {name:"Bobby Wagner", teams:["Seahawks"], position:"LB", hof:false},
  {name:"Stephon Gilmore", teams:["Bills","Panthers"], position:"CB", hof:false},
  {name:"Y. A. Tittle", teams:["San Francisco 49ers","New York Giants"], position:"QB", hof:true},
  {name:"Norm Van Brocklin", teams:["Los Angeles Rams","Philadelphia Eagles"], position:"QB", hof:true},
  {name:"Jack Christiansen", teams:["Detroit Lions"], position:"S", hof:true},
  {name:"Tom Fears", teams:["Los Angeles Rams"], position:"WR", hof:true},
  {name:"Hugh McElhenny", teams:["San Francisco 49ers","Minnesota Vikings","New York Giants","Detroit Lions"], position:"RB", hof:true},
  {name:"Pete Pihos", teams:["Philadelphia Eagles"], position:"TE", hof:true},
  {name:"Turk Edwards", teams:["Washington Redskins"], position:"OT", hof:true},
  {name:"Leo Nomellini", teams:["San Francisco 49ers"], position:"DL", hof:true},
  {name:"Joe Perry", teams:["San Francisco 49ers","Baltimore Colts"], position:"RB", hof:true},
  {name:"Ernie Stautner", teams:["Pittsburgh Steelers"], position:"DL", hof:true},
  {name:"Cliff Battles", teams:["Washington Redskins"], position:"RB", hof:true},
  {name:"Art Donovan", teams:["Baltimore Colts"], position:"DL", hof:true},
  {name:"Elroy Hirsch", teams:["Los Angeles Rams"], position:"WR", hof:true},
  {name:"Wayne Millner", teams:["Washington Redskins"], position:"TE", hof:true},
  {name:"Marion Motley", teams:["Cleveland Browns","Pittsburgh Steelers"], position:"RB", hof:true},
  {name:"Charley Trippi", teams:["Chicago Cardinals"], position:"RB", hof:true},
  {name:"Alex Wojciechowicz", teams:["Detroit Lions","Philadelphia Eagles"], position:"IOL", hof:true},
  {name:"Chuck Bednarik", teams:["Philadelphia Eagles"], position:"IOL", hof:true},
  {name:"Bobby Layne", teams:["Chicago Bears","Detroit Lions","Pittsburgh Steelers"], position:"QB", hof:true},
  {name:"Ken Strong", teams:["New York Giants"], position:"RB", hof:true},
  {name:"Joe Stydahar", teams:["Chicago Bears"], position:"OT", hof:true},
  {name:"Emlen Tunnell", teams:["New York Giants","Green Bay Packers"], position:"S", hof:true},
  {name:"Bill Dudley", teams:["Pittsburgh Steelers","Detroit Lions","Washington Redskins"], position:"RB", hof:true},
  {name:"Joe Guyon", teams:["New York Giants"], position:"RB", hof:true},
  {name:"Arnie Herber", teams:["Green Bay Packers","New York Giants"], position:"QB", hof:true},
  {name:"Walt Kiesling", teams:["Chicago Cardinals","Chicago Bears","Green Bay Packers","Pittsburgh Steelers"], position:"IOL", hof:true},
  {name:"George McAfee", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Steve Owen", teams:["New York Giants"], position:"OT", hof:true},
  {name:"Bulldog Turner", teams:["Chicago Bears"], position:"IOL", hof:true},
  {name:"John 'Paddy' Driscoll", teams:["Chicago Bears"], position:"QB", hof:true},
  {name:"Dan Fortmann", teams:["Chicago Bears"], position:"IOL", hof:true},
  {name:"Otto Graham", teams:["Cleveland Browns"], position:"QB", hof:true},
  {name:"Sid Luckman", teams:["Chicago Bears"], position:"QB", hof:true},
  {name:"Steve Van Buren", teams:["Philadelphia Eagles"], position:"RB", hof:true},
  {name:"Bob Waterfield", teams:["Los Angeles Rams"], position:"QB", hof:true},
  {name:"Jimmy Conzelman", teams:["Chicago Cardinals"], position:"QB", hof:true},
  {name:"Ed Healey", teams:["Chicago Bears"], position:"OT", hof:true},
  {name:"Clarke Hinkle", teams:["Green Bay Packers"], position:"RB", hof:true},
  {name:"William R. Lyman", teams:["Chicago Bears"], position:"OT", hof:true},
  {name:"Mike Michalske", teams:["Green Bay Packers"], position:"IOL", hof:true},
  {name:"George Trafton", teams:["Chicago Bears"], position:"IOL", hof:true},
  {name:"Sammy Baugh", teams:["Washington Redskins"], position:"QB", hof:true},
  {name:"Dutch Clark", teams:["Detroit Lions"], position:"RB", hof:true},
  {name:"Harold Grange", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Mel Hein", teams:["New York Giants"], position:"IOL", hof:true},
  {name:"Pete Henry", teams:["New York Giants"], position:"OT", hof:true},
  {name:"Cal Hubbard", teams:["New York Giants","Green Bay Packers","Pittsburgh Steelers"], position:"OT", hof:true},
  {name:"Don Hutson", teams:["Green Bay Packers"], position:"WR", hof:true},
  {name:"Earl Lambeau", teams:["Green Bay Packers","Chicago Cardinals","Washington Redskins"], position:"RB", hof:true},
  {name:"John 'Blood' McNally", teams:["Green Bay Packers","Pittsburgh Steelers"], position:"RB", hof:true},
  {name:"Bronko Nagurski", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Ernie Nevers", teams:["Chicago Cardinals"], position:"RB", hof:true},
  {name:"Jim Thorpe", teams:["New York Giants","Chicago Cardinals"], position:"RB", hof:true},
  {name:"Al Blozis", teams:["New York Giants"], position:"OT", hof:true},
  {name:"Al Carmichael", teams:["Green Bay Packers"], position:"RB", hof:true},
  {name:"Al DeRogatis", teams:["New York Giants"], position:"DL", hof:true},
  {name:"Al Wistert", teams:["Philadelphia Eagles"], position:"OT", hof:true},
  {name:"Alan Page", teams:["Minnesota Vikings","Chicago Bears"], position:"DL", hof:true},
  {name:"Albert Haynesworth", teams:["Tennessee Titans","Washington Redskins"], position:"DL", hof:false},
  {name:"Alex Karras", teams:["Detroit Lions"], position:"DL", hof:true},
  {name:"Alfred Jenkins", teams:["Atlanta Falcons"], position:"WR", hof:false},
  {name:"Andy Robustelli", teams:["Los Angeles Rams","New York Giants"], position:"DL", hof:true},
  {name:"Art Donovan", teams:["Baltimore Colts"], position:"DL", hof:true},
  {name:"Art Powell", teams:["Oakland Raiders"], position:"WR", hof:false},
  {name:"Babe Parilli", teams:["Green Bay Packers","Boston Patriots","Oakland Raiders"], position:"QB", hof:true},
  {name:"Barney Poole", teams:["New York Giants","Dallas Texans"], position:"TE", hof:true},
  {name:"Bart Starr", teams:["Green Bay Packers"], position:"QB", hof:true},
  {name:"Beattie Feathers", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Bill George", teams:["Chicago Bears","Los Angeles Rams"], position:"LB", hof:true},
  {name:"Bill Hewitt", teams:["Chicago Bears","Philadelphia Eagles"], position:"TE", hof:true},
  {name:"Bill Polian", teams:[], position:"RB", hof:false},
  {name:"Billy Cannon", teams:["Houston Oilers"], position:"RB", hof:true},
  {name:"Billy Howton", teams:["Green Bay Packers","Dallas Cowboys"], position:"WR", hof:true},
  {name:"Bob Brown", teams:["Philadelphia Eagles","Los Angeles Rams","Oakland Raiders"], position:"OT", hof:true},
  {name:"Bob Griese", teams:["Miami Dolphins"], position:"QB", hof:true},
  {name:"Bob Hayes", teams:["Dallas Cowboys"], position:"WR", hof:true},
  {name:"Bob Lilly", teams:["Dallas Cowboys"], position:"DL", hof:true},
  {name:"Bob St. Clair", teams:["San Francisco 49ers"], position:"OT", hof:true},
  {name:"Bo Jackson", teams:["Los Angeles Raiders"], position:"RB", hof:false},
  {name:"Brad Johnson", teams:["Tampa Bay Buccaneers"], position:"QB", hof:false},
  {name:"Bronko Nagurski", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Bubba Smith", teams:["Baltimore Colts"], position:"DL", hof:true},
  {name:"Buck Buchanan", teams:["Kansas City Chiefs"], position:"DL", hof:true},
  {name:"Calvin Johnson", teams:["Detroit Lions"], position:"WR", hof:false},
  {name:"Cam Newton", teams:["Carolina Panthers","New England Patriots"], position:"QB", hof:false},
  {name:"Carl Eller", teams:["Minnesota Vikings"], position:"DL", hof:true},
  {name:"Carroll Dale", teams:["Green Bay Packers","Los Angeles Rams"], position:"WR", hof:true},
  {name:"Cecil Isbell", teams:["Green Bay Packers"], position:"QB", hof:true},
  {name:"Champ Bailey", teams:["Washington Redskins","Denver Broncos"], position:"CB", hof:true},
  {name:"Charley Trippi", teams:["Chicago Cardinals"], position:"RB", hof:true},
  {name:"Chris Doleman", teams:["Minnesota Vikings","Atlanta Falcons"], position:"DL", hof:true},
  {name:"Chuck Bednarik", teams:["Philadelphia Eagles"], position:"IOL", hof:true},
  {name:"Cliff Harris", teams:["Dallas Cowboys"], position:"S", hof:true},
  {name:"Cliff Branch", teams:["Oakland/Los Angeles Raiders"], position:"WR", hof:true},
  {name:"Clifford Coffin", teams:[], position:"LB", hof:false},
  {name:"Clyde Simmons", teams:["Philadelphia Eagles","Arizona Cardinals"], position:"DL", hof:false},
  {name:"Dale Carter", teams:["Kansas City Chiefs","Minnesota Vikings"], position:"CB", hof:false},
  {name:"Dan Dierdorf", teams:["St. Louis Cardinals"], position:"OT", hof:true},
  {name:"Darrell Green", teams:["Washington Redskins"], position:"CB", hof:true},
  {name:"Dave Robinson", teams:["Green Bay Packers"], position:"LB", hof:true},
  {name:"Deacon Jones", teams:["Los Angeles Rams","San Diego Chargers"], position:"DL", hof:true},
  {name:"DeAngelo Hall", teams:["Atlanta Falcons","Washington Redskins"], position:"CB", hof:false},
  {name:"Dick Butkus", teams:["Chicago Bears"], position:"LB", hof:true},
  {name:"Dick Lane", teams:["Los Angeles Rams","Chicago Cardinals","Detroit Lions"], position:"CB", hof:true},
  {name:"Don Hutson", teams:["Green Bay Packers"], position:"WR", hof:true},
  {name:"Don Maynard", teams:["New York Jets","St. Louis Cardinals"], position:"WR", hof:true},
  {name:"Don Shula", teams:[], position:"QB", hof:false},
  {name:"Doug Atkins", teams:["Chicago Bears","Cleveland Browns"], position:"DL", hof:true},
  {name:"Drew Pearson", teams:["Dallas Cowboys"], position:"WR", hof:true},
  {name:"Dwight Stephenson", teams:["Miami Dolphins"], position:"IOL", hof:true},
  {name:"Elroy Hirsch", teams:["Los Angeles Rams"], position:"WR", hof:true},
  {name:"Emlen Tunnell", teams:["New York Giants","Green Bay Packers"], position:"S", hof:true},
  {name:"Ernie Stautner", teams:["Pittsburgh Steelers"], position:"DL", hof:true},
  {name:"Fred Biletnikoff", teams:["Oakland/Los Angeles Raiders"], position:"WR", hof:true},
  {name:"Fred Carr", teams:["Green Bay Packers"], position:"LB", hof:false},
  {name:"Fred Dean", teams:["San Diego/ San Francisco 49ers"], position:"DL", hof:true},
  {name:"Fred Gehrke", teams:["Los Angeles Rams"], position:"CB", hof:false},
  {name:"George Blanda", teams:["Chicago Bears","Houston Oilers","Oakland Raiders"], position:"QB", hof:true},
  {name:"George Connor", teams:["Chicago Bears"], position:"LB", hof:true},
  {name:"George Trafton", teams:["Chicago Bears"], position:"IOL", hof:true},
  {name:"Gil Brandt", teams:[], position:"RB", hof:false},
  {name:"Gino Marchetti", teams:["Baltimore Colts"], position:"DL", hof:true},
  {name:"Glen Edwards", teams:["Pittsburgh Steelers","San Diego Chargers"], position:"S", hof:false},
  {name:"Graham Gano", teams:["Carolina Panthers"], position:"K", hof:false},
  {name:"Hines Ward", teams:["Pittsburgh Steelers"], position:"WR", hof:true},
  {name:"Howie Long", teams:["Oakland/Los Angeles Raiders"], position:"DL", hof:true},
  {name:"Howie Reinfeld", teams:[], position:"OT", hof:false},
  {name:"Howard Cassady", teams:["Detroit Lions","Dallas Cowboys"], position:"RB", hof:false},
  {name:"Howard Schnellenberger", teams:[], position:"QB", hof:false},
  {name:"Huey Richardson", teams:[], position:"LB", hof:false},
  {name:"Hugh McElhenny", teams:["San Francisco 49ers","Minnesota Vikings","New York Giants","Detroit Lions"], position:"RB", hof:true},
  {name:"Jack Butler", teams:["Pittsburgh Steelers"], position:"CB", hof:true},
  {name:"Jack Lambert", teams:["Pittsburgh Steelers"], position:"LB", hof:true},
  {name:"Jack Youngblood", teams:["Los Angeles Rams"], position:"DL", hof:true},
  {name:"Jack Christiansen", teams:["Detroit Lions"], position:"S", hof:true},
  {name:"James Lofton", teams:["Green Bay Packers","Los Angeles Raiders","Buffalo Bills"], position:"WR", hof:true},
  {name:"Jim Brown", teams:["Cleveland Browns"], position:"RB", hof:true},
  {name:"Jim Covert", teams:["Chicago Bears"], position:"OT", hof:true},
  {name:"Jim Langer", teams:["Miami Dolphins"], position:"IOL", hof:true},
  {name:"Jim Marshall", teams:["Minnesota Vikings"], position:"DL", hof:true},
  {name:"Jim Parker", teams:["Baltimore Colts"], position:"IOL", hof:true},
  {name:"Jim Taylor", teams:["Green Bay Packers"], position:"RB", hof:true},
  {name:"John Hannah", teams:["New England Patriots"], position:"IOL", hof:true},
  {name:"John Riggins", teams:["Washington Redskins","New York Jets"], position:"RB", hof:true},
  {name:"Johnny Robinson", teams:["Kansas City Chiefs"], position:"S", hof:true},
  {name:"Johnny Unitas", teams:["Baltimore Colts","San Diego Chargers"], position:"QB", hof:true},
  {name:"John Mackey", teams:["Baltimore Colts"], position:"TE", hof:true},
  {name:"John Randle", teams:["Minnesota Vikings","Tampa Bay Buccaneers"], position:"DL", hof:true},
  {name:"John Stallworth", teams:["Pittsburgh Steelers"], position:"WR", hof:true},
  {name:"Johnny Robinson", teams:["Kansas City Chiefs"], position:"S", hof:true},
  {name:"Joe DeLamielleure", teams:["Buffalo Bills","Cleveland Browns"], position:"IOL", hof:true},
  {name:"Joe Greene", teams:["Pittsburgh Steelers"], position:"DL", hof:true},
  {name:"Joe Namath", teams:["New York Jets","Los Angeles Rams"], position:"QB", hof:true},
  {name:"Joe Schmidt", teams:["Detroit Lions"], position:"LB", hof:true},
  {name:"Joe Thomas", teams:["Cleveland Browns"], position:"OT", hof:false},
  {name:"John Elway", teams:["Denver Broncos"], position:"QB", hof:true},
  {name:"Johnny Bench", teams:["Cincinnati Bengals"], position:"IOL", hof:false},
  {name:"John Riggins", teams:["Washington Commanders","New York Jets"], position:"RB", hof:true},
  {name:"Jonas Gray", teams:["New England Patriots"], position:"RB", hof:false},
  {name:"Josh Allen", teams:["Buffalo Bills"], position:"QB", hof:false},
  {name:"Julio Jones", teams:["Atlanta Falcons","Tennessee Titans"], position:"WR", hof:false},
  {name:"Ken Houston", teams:["Houston Oilers","Washington Redskins"], position:"S", hof:true},
  {name:"Ken Stabler", teams:["Oakland/Los Angeles Raiders","Houston Oilers"], position:"QB", hof:true},
  {name:"Kenny Stabler", teams:["Oakland/Los Angeles Raiders","Houston Oilers"], position:"QB", hof:true},
  {name:"Kellen Winslow", teams:["San Diego Chargers"], position:"TE", hof:true},
  {name:"Lance Alworth", teams:["San Diego Chargers"], position:"WR", hof:true},
  {name:"Lawrence Taylor", teams:["New York Giants"], position:"LB", hof:true},
  {name:"LeRoy Kelly", teams:["Cleveland Browns"], position:"RB", hof:true},
  {name:"Len Dawson", teams:["Kansas City Chiefs"], position:"QB", hof:true},
  {name:"Leonard Wheeler", teams:["Cincinnati Bengals"], position:"LB", hof:false},
  {name:"Les Richter", teams:["Los Angeles Rams"], position:"LB", hof:true},
  {name:"Lynn Swann", teams:["Pittsburgh Steelers"], position:"WR", hof:true},
  {name:"Mac Speedie", teams:["Cleveland Browns"], position:"WR", hof:true},
  {name:"Marcus Allen", teams:["Los Angeles Raiders","Kansas City Chiefs"], position:"RB", hof:true},
  {name:"Marvin Harrison", teams:["Indianapolis Colts"], position:"WR", hof:true},
  {name:"Matt Blair", teams:["Minnesota Vikings"], position:"LB", hof:true},
  {name:"Mel Renfro", teams:["Dallas Cowboys"], position:"CB", hof:true},
  {name:"Mike Ditka", teams:["Chicago Bears","Philadelphia Eagles","Dallas Cowboys"], position:"TE", hof:true},
  {name:"Mike Haynes", teams:["New England Patriots","Los Angeles Raiders"], position:"CB", hof:true},
  {name:"Mike Singletary", teams:["Chicago Bears"], position:"LB", hof:true},
  {name:"Mike Webster", teams:["Pittsburgh Steelers"], position:"IOL", hof:true},
  {name:"Monte Johnson", teams:["San Diego Chargers"], position:"LB", hof:false},
  {name:"Morten Andersen", teams:["New Orleans Saints","Atlanta Falcons"], position:"K", hof:true},
  {name:"Nate Newton", teams:["Dallas Cowboys"], position:"IOL", hof:false},
  {name:"O.J. Simpson", teams:["Buffalo Bills","San Francisco 49ers"], position:"RB", hof:true},
  {name:"Ozzie Newsome", teams:["Cleveland Browns"], position:"TE", hof:true},
  {name:"Perry Fewell", teams:[], position:"LB", hof:false},
  {name:"Paul Hornung", teams:["Green Bay Packers"], position:"RB", hof:true},
  {name:"Paul Warfield", teams:["Cleveland Browns","Miami Dolphins"], position:"WR", hof:true},
  {name:"Pete Gogolak", teams:["Buffalo Bills","New York Giants"], position:"K", hof:true},
  {name:"Phil Simms", teams:["New York Giants"], position:"QB", hof:true},
  {name:"Phil Villapiano", teams:["Oakland Raiders","Buffalo Bills"], position:"LB", hof:true},
  {name:"Pittsburgh Steelers Legends", teams:["Pittsburgh Steelers"], position:"DL", hof:false},
  {name:"Randy Gradishar", teams:["Denver Broncos"], position:"LB", hof:true},
  {name:"Ray Nitschke", teams:["Green Bay Packers"], position:"LB", hof:true},
  {name:"Rayfield Wright", teams:["Dallas Cowboys"], position:"OT", hof:true},
  {name:"Reggie White", teams:["Philadelphia Eagles","Green Bay Packers"], position:"DL", hof:true},
  {name:"Richard Dent", teams:["Chicago Bears","San Francisco 49ers"], position:"DL", hof:true},
  {name:"Richard Sherman", teams:["Seattle Seahawks","San Francisco 49ers"], position:"CB", hof:false},
  {name:"Ricky Watters", teams:["San Francisco 49ers","Philadelphia Eagles","Seattle Seahawks"], position:"RB", hof:false},
  {name:"Roger Staubach", teams:["Dallas Cowboys"], position:"QB", hof:true},
  {name:"Ronnie Lott", teams:["San Francisco 49ers","Los Angeles Raiders","New York Jets"], position:"S", hof:true},
  {name:"Ronnie Bull", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Ronnie Lott", teams:["San Francisco 49ers","Los Angeles Raiders","New York Jets"], position:"S", hof:true},
  {name:"Roy Green", teams:["St. Louis/Phoenix Cardinals"], position:"WR", hof:false},
  {name:"Sam Huff", teams:["New York Giants","Washington Redskins"], position:"LB", hof:true},
  {name:"Sam Mills", teams:["New Orleans Saints","Carolina Panthers"], position:"LB", hof:true},
  {name:"Sammy Baugh", teams:["Washington Redskins"], position:"QB", hof:true},
  {name:"Sammy Baugh", teams:["Washington Redskins"], position:"S", hof:true},
  {name:"Sid Luckman", teams:["Chicago Bears"], position:"QB", hof:true},
  {name:"Steve Largent", teams:["Seattle Seahawks"], position:"WR", hof:true},
  {name:"Sterling Sharpe", teams:["Green Bay Packers"], position:"WR", hof:true},
  {name:"Ted Hendricks", teams:["Baltimore Colts","Oakland/Los Angeles Raiders","Green Bay Packers"], position:"LB", hof:true},
  {name:"Terrell Davis", teams:["Denver Broncos"], position:"RB", hof:true},
  {name:"Thurman Thomas", teams:["Buffalo Bills"], position:"RB", hof:true},
  {name:"Tony Gonzalez", teams:["Kansas City Chiefs","Atlanta Falcons"], position:"TE", hof:true},
  {name:"Tony Boselli", teams:["Jacksonville Jaguars"], position:"OT", hof:true},
  {name:"Tony Dorsett", teams:["Dallas Cowboys","Denver Broncos"], position:"RB", hof:true},
  {name:"Tom Brady", teams:["New England Patriots","Tampa Bay Buccaneers"], position:"QB", hof:true},
  {name:"Tom Fears", teams:["Los Angeles Rams"], position:"WR", hof:true},
  {name:"Tom Mack", teams:["Los Angeles Rams"], position:"IOL", hof:true},
  {name:"Tom Matte", teams:["Baltimore Colts"], position:"RB", hof:true},
  {name:"Tony Canadeo", teams:["Green Bay Packers"], position:"RB", hof:true},
  {name:"Troy Aikman", teams:["Dallas Cowboys"], position:"QB", hof:true},
  {name:"Troy Polamalu", teams:["Pittsburgh Steelers"], position:"S", hof:true},
  {name:"Tucker Frederickson", teams:["New York Giants"], position:"RB", hof:true},
  {name:"Warren Moon", teams:["Houston Oilers","Minnesota Vikings","Seattle Seahawks","Kansas City Chiefs"], position:"QB", hof:true},
  {name:"Willie Brown", teams:["Denver Broncos","Oakland/Los Angeles Raiders"], position:"CB", hof:true},
  {name:"Willie Davis", teams:["Green Bay Packers"], position:"DL", hof:true},
  {name:"Willie Lanier", teams:["Kansas City Chiefs"], position:"LB", hof:true},
  {name:"Will Shields", teams:["Kansas City Chiefs"], position:"IOL", hof:true},
  {name:"Willie Wood", teams:["Green Bay Packers"], position:"S", hof:true},
  {name:"William Perry", teams:["Chicago Bears"], position:"DL", hof:true},
  {name:"Walt Sweeney", teams:["San Diego Chargers","Washington Redskins"], position:"IOL", hof:true},
  {name:"Warren Sapp", teams:["Tampa Bay Buccaneers","Oakland Raiders"], position:"DL", hof:true},
  {name:"Walter Payton", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Wayne Chrebet", teams:["New York Jets"], position:"WR", hof:false},
  {name:"Willie Lanier", teams:["Kansas City Chiefs"], position:"LB", hof:true},
  {name:"Alan Page", teams:["Minnesota Vikings"], position:"DL", hof:true},
  {name:"Alan Faneca", teams:["Pittsburgh Steelers","New York Jets"], position:"IOL", hof:true},
  {name:"Andre Reed", teams:["Buffalo Bills","Washington Commanders"], position:"WR", hof:true},
  {name:"Anthony Muñoz", teams:["Cincinnati Bengals"], position:"OT", hof:true},
  {name:"Art Monk", teams:["Washington Commanders"], position:"WR", hof:true},
  {name:"Bart Starr", teams:["Green Bay Packers"], position:"QB", hof:true},
  {name:"Barry Sanders", teams:["Detroit Lions"], position:"RB", hof:true},
  {name:"Beasley Reece", teams:["New York Giants","Dallas Cowboys"], position:"CB", hof:false},
  {name:"Bill Cowher", teams:["Pittsburgh Steelers"], position:"LB", hof:false},
  {name:"Billy Shaw", teams:["Buffalo Bills"], position:"IOL", hof:true},
  {name:"Bo Jackson", teams:["Los Angeles Raiders","Kansas City Royals"], position:"RB", hof:true},
  {name:"Bob Brown", teams:["Philadelphia Eagles","Los Angeles Rams","Oakland Raiders"], position:"OT", hof:true},
  {name:"Bob Hayes", teams:["Dallas Cowboys"], position:"WR", hof:true},
  {name:"Bob Lilly", teams:["Dallas Cowboys"], position:"DL", hof:true},
  {name:"Bob St. Clair", teams:["San Francisco 49ers"], position:"OT", hof:true},
  {name:"Bruce Matthews", teams:["Houston/Tennessee Oilers/Titans"], position:"IOL", hof:true},
  {name:"Cam Newton", teams:["Carolina Panthers","New England Patriots"], position:"QB", hof:false},
  {name:"Cam Wake", teams:["Miami Dolphins","Tennessee Titans"], position:"DL", hof:false},
  {name:"Cam Heyward", teams:["Pittsburgh Steelers"], position:"DL", hof:false},
  {name:"Carl Eller", teams:["Minnesota Vikings"], position:"DL", hof:true},
  {name:"Carl Banks", teams:["New York Giants"], position:"LB", hof:true},
  {name:"Carson Palmer", teams:["Cincinnati Bengals","Arizona Cardinals","Oakland Raiders"], position:"QB", hof:false},
  {name:"Cecil Isbell", teams:["Green Bay Packers"], position:"QB", hof:true},
  {name:"Charles Haley", teams:["San Francisco 49ers","Dallas Cowboys"], position:"DL", hof:true},
  {name:"Chris Doleman", teams:["Minnesota Vikings","Atlanta Falcons","San Francisco 49ers"], position:"DL", hof:true},
  {name:"Chuck Bednarik", teams:["Philadelphia Eagles"], position:"LB", hof:true},
  {name:"Clay Matthews", teams:["Green Bay Packers"], position:"LB", hof:true},
  {name:"Cliff Harris", teams:["Dallas Cowboys"], position:"S", hof:true},
  {name:"Dan Marino", teams:["Miami Dolphins"], position:"QB", hof:true},
  {name:"Darrell Green", teams:["Washington Commanders"], position:"CB", hof:true},
  {name:"Dave Casper", teams:["Oakland Raiders","Houston Oilers","Minnesota Vikings"], position:"TE", hof:true},
  {name:"Dave Robinson", teams:["Green Bay Packers"], position:"LB", hof:true},
  {name:"Derrick Brooks", teams:["Tampa Bay Buccaneers"], position:"LB", hof:true},
  {name:"Dick Butkus", teams:["Chicago Bears"], position:"LB", hof:true},
  {name:"Don Hutson", teams:["Green Bay Packers"], position:"WR", hof:true},
  {name:"Don Maynard", teams:["New York Jets"], position:"WR", hof:true},
  {name:"Doug Atkins", teams:["Chicago Bears","Cleveland Browns"], position:"DL", hof:true},
  {name:"Duane Thomas", teams:["Dallas Cowboys"], position:"RB", hof:false},
  {name:"Dwight Stephenson", teams:["Miami Dolphins"], position:"IOL", hof:true},
  {name:"Earl Campbell", teams:["Houston Oilers","New Orleans Saints"], position:"RB", hof:true},
  {name:"Ed Sprinkle", teams:["Chicago Bears"], position:"DL", hof:true},
  {name:"Ed Reed", teams:["Baltimore Ravens"], position:"S", hof:true},
  {name:"Emmitt Thomas", teams:["Kansas City Chiefs"], position:"CB", hof:true},
  {name:"Eric Dickerson", teams:["Los Angeles Rams","Indianapolis Colts","Los Angeles Raiders","Atlanta Falcons"], position:"RB", hof:true},
  {name:"Ernie Holmes", teams:["Pittsburgh Steelers"], position:"DL", hof:true},
  {name:"Frank Gore", teams:["San Francisco 49ers","Indianapolis Colts","Miami Dolphins","Buffalo Bills","New York Jets"], position:"RB", hof:false},
  {name:"Franco Harris", teams:["Pittsburgh Steelers","Seattle Seahawks"], position:"RB", hof:true},
  {name:"Fred Biletnikoff", teams:["Oakland/Los Angeles Raiders"], position:"WR", hof:true},
  {name:"Fred Dean", teams:["San Diego/Los Angeles Chargers","San Francisco 49ers"], position:"DL", hof:true},
  {name:"Gale Sayers", teams:["Chicago Bears"], position:"RB", hof:true},
  {name:"Gene Upshaw", teams:["Oakland/Los Angeles Raiders"], position:"IOL", hof:true},
  {name:"George Blanda", teams:["Chicago Bears","Houston Oilers","Oakland Raiders"], position:"QB", hof:true},
  {name:"Gino Marchetti", teams:["Baltimore Colts"], position:"DL", hof:true},
  {name:"Glen Edwards", teams:["Pittsburgh Steelers","San Diego Chargers"], position:"S", hof:true},
  {name:"Harry Carson", teams:["New York Giants"], position:"LB", hof:true},
  {name:"Hines Ward", teams:["Pittsburgh Steelers"], position:"WR", hof:true},
  {name:"Howie Long", teams:["Oakland/Los Angeles Raiders"], position:"DL", hof:true},
  {name:"Hugh McElhenny", teams:["San Francisco 49ers","Minnesota Vikings","New York Giants","Detroit Lions"], position:"RB", hof:true},
  {name:"Isaac Bruce", teams:["St. Louis/Los Angeles Rams","San Francisco 49ers"], position:"WR", hof:true},
  {name:"Jack Ham", teams:["Pittsburgh Steelers"], position:"LB", hof:true},
  {name:"Jack Lambert", teams:["Pittsburgh Steelers"], position:"LB", hof:true},
  {name:"Jack Youngblood", teams:["Los Angeles Rams"], position:"DL", hof:true},
  {name:"Jack Christiansen", teams:["Detroit Lions"], position:"S", hof:true},
  {name:"James Lofton", teams:["Green Bay Packers","Los Angeles Raiders","San Diego Chargers"], position:"WR", hof:true},
  {name:"James Harrison", teams:["Pittsburgh Steelers"], position:"LB", hof:false},
  {name:"James Lofton", teams:["Green Bay Packers","Los Angeles Raiders","San Diego Chargers"], position:"WR", hof:true},
  {name:"Jan Stenerud", teams:["Kansas City Chiefs","Green Bay Packers","Minnesota Vikings"], position:"K", hof:true},
  {name:"Jason Taylor", teams:["Miami Dolphins","Washington Commanders","New York Jets"], position:"DL", hof:true},
  {name:"Jimmy Smith", teams:["Jacksonville Jaguars"], position:"CB", hof:false},
  {name:"Joe DeLamielleure", teams:["Buffalo Bills","Cleveland Browns"], position:"IOL", hof:true},
  {name:"Joe Greene", teams:["Pittsburgh Steelers"], position:"DL", hof:true},
  {name:"Joe Namath", teams:["New York Jets","Los Angeles Rams"], position:"QB", hof:true},
  {name:"Joe Schmidt", teams:["Detroit Lions"], position:"LB", hof:true},
  {name:"John Hannah", teams:["New England Patriots"], position:"IOL", hof:true},
  {name:"John Riggins", teams:["Washington Commanders","New York Jets"], position:"RB", hof:true},
  {name:"Johnny Robinson", teams:["Kansas City Chiefs"], position:"S", hof:true},
  {name:"John Mackey", teams:["Baltimore Colts"], position:"TE", hof:true},
  {name:"Johnny Unitas", teams:["Baltimore Colts","San Diego Chargers"], position:"QB", hof:true},
  {name:"Jonathan Ogden", teams:["Baltimore Ravens"], position:"OT", hof:true},
  {name:"Julius Peppers", teams:["Carolina Panthers","Chicago Bears","Green Bay Packers"], position:"DL", hof:true},
  {name:"Ken Houston", teams:["Houston Oilers","Washington Commanders"], position:"S", hof:true},
  {name:"Ken Stabler", teams:["Oakland/Los Angeles Raiders","Houston Oilers"], position:"QB", hof:true},
  {name:"LaDainian Tomlinson", teams:["San Diego Chargers","New York Jets"], position:"RB", hof:true},
  {name:"Lawrence Taylor", teams:["New York Giants"], position:"LB", hof:true},
  {name:"Len Dawson", teams:["Kansas City Chiefs"], position:"QB", hof:true},
  {name:"Leonard Marshall", teams:["New York Giants","New York Jets"], position:"DL", hof:false},
  {name:"LeRoy Kelly", teams:["Cleveland Browns"], position:"RB", hof:true},
  {name:"Les Richter", teams:["Los Angeles Rams"], position:"LB", hof:true},
  {name:"Lynn Swann", teams:["Pittsburgh Steelers"], position:"WR", hof:true},
  {name:"Mac Speedie", teams:["Cleveland Browns"], position:"WR", hof:true},
  {name:"Marcus Allen", teams:["Los Angeles Raiders","Kansas City Chiefs"], position:"RB", hof:true},
  {name:"Patrick Mahomes", teams:["Kansas City Chiefs"], position:"QB", hof:false},
    {name:"Trevor Lawrence", teams:["Jacksonville Jaguars"], position:"QB", hof:false},
    {name:"Dak Prescott", teams:["Dallas Cowboys"], position:"QB", hof:false},
    {name:"Sam Darnold", teams:["Carolina Panthers","New York Jets","San Francisco 49ers","Seattle Seahawks"], position:"QB", hof:false},
    {name:"Aaron Rodgers", teams:["Green Bay Packers","New York Jets","Pittsburgh Steelers"], position:"QB", hof:false},
    {name:"Joe Burrow", teams:["Cincinnati Bengals"], position:"QB", hof:false},
    {name:"Josh Allen", teams:["Buffalo Bills"], position:"QB", hof:false},
    {name:"Drake Maye", teams:["New England Patriots"], position:"QB", hof:false},
    {name:"Jalen Hurts", teams:["Philadelphia Eagles"], position:"QB", hof:false},
    {name:"Lamar Jackson", teams:["Baltimore Ravens"], position:"QB", hof:false},
    {name:"Justin Jefferson", teams:["Minnesota Vikings"], position:"WR", hof:false},
    {name:"Ja'Marr Chase", teams:["Cincinnati Bengals"], position:"WR", hof:false},
    {name:"Amon-Ra St. Brown", teams:["Detroit Lions"], position:"WR", hof:false},
    {name:"Chris Olave", teams:["New Orleans Saints"], position:"WR", hof:false},
    {name:"CeeDee Lamb", teams:["Dallas Cowboys"], position:"WR", hof:false},
    {name:"Puka Nacua", teams:["Los Angeles Rams"], position:"WR", hof:false},
    {name:"Terry McLaurin", teams:["Washington Commanders"], position:"WR", hof:false},
    {name:"Jameson Williams", teams:["Detroit Lions"], position:"WR", hof:false},
    {name:"Jakobi Meyers", teams:["New England Patriots","Las Vegas Raiders","Jacksonville Jaguars"], position:"WR", hof:false},
    {name:"Ladd McConkey", teams:["Los Angeles Chargers"], position:"WR", hof:false},
    {name:"George Pickens", teams:["Pittsburgh Steelers","Dallas Cowboys"], position:"WR", hof:false},
    {name:"Tee Higgins", teams:["Cincinnati Bengals"], position:"WR", hof:false},
    {name:"Michael Pittman Jr.", teams:["Indianapolis Colts"], position:"WR", hof:false},
    {name:"Saquon Barkley", teams:["New York Giants","Philadelphia Eagles"], position:"RB", hof:false},
    {name:"Derrick Henry", teams:["Tennessee Titans","Baltimore Ravens"], position:"RB", hof:false},
    {name:"James Cook", teams:["Buffalo Bills"], position:"RB", hof:false},
    {name:"Bijan Robinson", teams:["Atlanta Falcons"], position:"RB", hof:false},
    {name:"Tony Pollard", teams:["Dallas Cowboys","Tennessee Titans"], position:"RB", hof:false},
    {name:"Devon Achane", teams:["Miami Dolphins"], position:"RB", hof:false},
    {name:"Kyren Williams", teams:["Los Angeles Rams"], position:"RB", hof:false},
    {name:"TreVeyon Henderson", teams:["New England Patriots"], position:"RB", hof:false},
    {name:"Jaxon Smith-Njigba", teams:["Seattle Seahawks"], position:"WR", hof:false},
    {name:"Quenton Nelson", teams:["Indianapolis Colts"], position:"OL", hof:false},
    {name:"Creed Humphrey", teams:["Kansas City Chiefs"], position:"C", hof:false},
    {name:"Aaron Brewer", teams:["Miami Dolphins"], position:"C", hof:false},
    {name:"Chris Lindstrom", teams:["Atlanta Falcons"], position:"G", hof:false},
    {name:"Darnell Wright", teams:["Chicago Bears"], position:"OT", hof:false},
    {name:"Micah Parsons", teams:["Dallas Cowboys","Green Bay Packers"], position:"LB", hof:false},
    {name:"Brian Burns", teams:["Carolina Panthers","New York Giants"], position:"DE", hof:false},
    {name:"Aidan Hutchinson", teams:["Detroit Lions"], position:"DE", hof:false},
    {name:"Joey Bosa", teams:["Los Angeles Chargers","Buffalo Bills"], position:"DE", hof:false},
    {name:"Rashan Gary", teams:["Green Bay Packers"], position:"DE", hof:false},
    {name:"Myles Garrett", teams:["Cleveland Browns"], position:"DE", hof:false},
    {name:"Zach Allen", teams:["Arizona Cardinals","Denver Broncos"], position:"DE", hof:false},
    {name:"Patrick Surtain II", teams:["Denver Broncos"], position:"CB", hof:false},
    {name:"Sauce Gardner", teams:["New York Jets"], position:"CB", hof:false},
    {name:"Tre'Davious White", teams:["Buffalo Bills","Los Angeles Rams"], position:"CB", hof:false},
    {name:"Bryce Hall", teams:["Tampa Bay Buccaneers"], position:"CB", hof:false},
    {name:"Budda Baker", teams:["Arizona Cardinals"], position:"S", hof:false},
    {name:"Jaycee Horn", teams:["Carolina Panthers"], position:"CB", hof:false},
    {name:"Jaquan Brisker", teams:["Chicago Bears"], position:"S", hof:false},
    {name:"Cam Akers", teams:["Los Angeles Rams","Minnesota Vikings"], position:"RB", hof:false},
    {name:"Christian McCaffrey", teams:["Carolina Panthers","San Francisco 49ers"], position:"RB", hof:false},
    {name:"Calvin Ridley", teams:["Atlanta Falcons","Jacksonville Jaguars"], position:"WR", hof:false},
    {name:"Keenan Allen", teams:["Los Angeles Chargers"], position:"WR", hof:false},
    {name:"Tyreek Hill", teams:["Kansas City Chiefs","Miami Dolphins"], position:"WR", hof:false},
    {name:"Stephon Diggs", teams:["Buffalo Bills","San Francisco 49ers","New England Patriots"], position:"WR", hof:false},
    {name:"Russell Wilson", teams:["Seattle Seahawks","Denver Broncos","New York Giants"], position:"QB", hof:false},
    {name:"Geno Smith", teams:["Seattle Seahawks","New York Jets","Los Angeles Chargers","Las Vegas Raiders"], position:"QB", hof:false},
    {name:"Mac Jones", teams:["New England Patriots","San Francisco 49ers"], position:"QB", hof:false},
    {name:"Josh Jacobs", teams:["Las Vegas Raiders","Seattle Seahawks"], position:"RB", hof:false},
    {name:"Joe Mixon", teams:["Cincinnati Bengals","Houston Texans"], position:"RB", hof:false},
    {name:"Miles Sanders", teams:["Philadelphia Eagles","Chicago Bears"], position:"RB", hof:false},
    {name:"Trey McBride", teams:["Arizona Cardinals"], position:"TE", hof:false},
    {name:"Kyle Pitts", teams:["Atlanta Falcons"], position:"TE", hof:false},
    {name:"Mark Andrews", teams:["Baltimore Ravens"], position:"TE", hof:false},
    {name:"Travis Kelce", teams:["Kansas City Chiefs"], position:"TE", hof:false},
    {name:"Khalil Shakir", teams:["Buffalo Bills"], position:"WR", hof:false},
    {name:"Parker Washington", teams:["Jacksonville Jaguars"], position:"WR", hof:false},
    {name:"Jordan Addison", teams:["Minnesota Vikings"], position:"WR", hof:false},
    {name:"Courtland Sutton", teams:["Denver Broncos"], position:"WR", hof:false},
    {name:"Cooper Kupp", teams:["Seattle Seahawks"], position:"WR", hof:false},
    {name:"A.J. Brown", teams:["Philadelphia Eagles","Tennessee Titans"], position:"WR", hof:false},
    {name:"DeVonta Smith", teams:["Philadelphia Eagles"], position:"WR", hof:false},
    {name:"Noah Gray", teams:["Kansas City Chiefs"], position:"TE", hof:false},
    {name:"Jake Briningstool", teams:["Kansas City Chiefs"], position:"TE", hof:false},
    {name:"Andy Isabella", teams:["Buffalo Bills"], position:"WR", hof:false},
    {name:"Curtis Samuel", teams:["Buffalo Bills","Chicago Bears"], position:"WR", hof:false},
    {name:"Ronnie Stanley", teams:["Baltimore Ravens"], position:"OT", hof:false},
    {name:"Rayshawn Slater", teams:["Los Angeles Chargers"], position:"OT", hof:false},
    {name:"Laremy Tunsil", teams:["Houston Texans"], position:"OT", hof:false},
    {name:"Connor McGovern", teams:["Buffalo Bills","New York Jets"], position:"C", hof:false},
    {name:"Joe Thuney", teams:["Kansas City Chiefs","New England Patriots"], position:"G", hof:false},
    {name:"Dion Dawkins", teams:["Buffalo Bills"], position:"OT", hof:false},
    {name:"Tyler Linderbaum", teams:["Baltimore Ravens"], position:"C", hof:false},
    {name:"Roquan Smith", teams:["Baltimore Ravens"], position:"LB", hof:false},
    {name:"Kyle Hamilton", teams:["Baltimore Ravens"], position:"S", hof:false},
    {name:"Nnamdi Madubuike", teams:["Baltimore Ravens"], position:"DT", hof:false},
    {name:"Patrick Ricard", teams:["Baltimore Ravens"], position:"FB", hof:false},
    {name:"Trey Hendrickson", teams:["Cincinnati Bengals"], position:"DE", hof:false},
    {name:"Jerry Jeudy", teams:["Cleveland Browns"], position:"WR", hof:false},
    {name:"Nico Collins", teams:["Houston Texans"], position:"WR", hof:false},
    {name:"Davante Adams", teams:["Green Bay Packers","Oakland Raiders","Las Vegas Raiders","Los Angeles Rams"], position:"WR", hof:false},
    {name:"T.J. Watt", teams:["Pittsburgh Steelers"], position:"LB", hof:false},
    {name:"Bobby Wagner", teams:["Seattle Seahawks","Los Angeles Rams","New Orleans Saints","Washington Commanders"], position:"LB", hof:false},
    {name:"Trey Hendrickson", teams:["New Orleans Saints","Cincinnati Bengals"], position:"DE", hof:false},
    {name:"Saquon Barkley", teams:["New York Giants","Philadelphia Eagles"], position:"RB", hof:false},
    {name:"Dion Dawkins", teams:["Buffalo Bills"], position:"OT", hof:false},
    {name:"Jonah Williams", teams:["Cincinnati Bengals"], position:"OT", hof:false},
    {name:"Lane Johnson", teams:["Philadelphia Eagles"], position:"OT", hof:false},
    {name:"Trent Williams", teams:["San Francisco 49ers","Washington Commanders"], position:"OT", hof:false},
    {name:"Chris Jones", teams:["Kansas City Chiefs"], position:"DT", hof:false},
    {name:"Aaron Donald", teams:["Los Angeles Rams"], position:"DT", hof:false},
    {name:"DeForest Buckner", teams:["San Francisco 49ers","Indianapolis Colts"], position:"DT", hof:false},
    {name:"Jaire Alexander", teams:["Green Bay Packers","Seattle Seahawks"], position:"CB", hof:false},
    {name:"Jalen Ramsey", teams:["Jacksonville Jaguars","Los Angeles Rams","Miami Dolphins"], position:"CB", hof:false},
    {name:"Minkah Fitzpatrick", teams:["Miami Dolphins","Pittsburgh Steelers"], position:"S", hof:false},
    {name:"Derwin James", teams:["Los Angeles Chargers"], position:"S", hof:false},
    {name:"Tyler Linderbaum", teams:["Baltimore Ravens"], position:"C", hof:false},
    {name:"Joel Bitonio", teams:["Cleveland Browns"], position:"G", hof:false},
    {name:"Rodger Saffold", teams:["Oakland Raiders","Los Angeles Rams","Tennessee Titans"], position:"G", hof:false},
    {name:"Quinn Meinerz", teams:["Denver Broncos","Chicago Bears"], position:"G", hof:false},
    {name:"Devin White", teams:["Tampa Bay Buccaneers"], position:"LB", hof:false},
    {name:"Fred Warner", teams:["San Francisco 49ers"], position:"LB", hof:false},
    {name:"Justin Houston", teams:["Kansas City Chiefs","Indianapolis Colts","Atlanta Falcons","Baltimore Ravens","New Orleans Saints"], position:"LB", hof:false},
    {name:"Khalil Mack", teams:["Oakland Raiders","Los Angeles Chargers","Chicago Bears"], position:"LB", hof:false},
    {name:"Leonard Floyd", teams:["Los Angeles Rams","Chicago Bears","Atlanta Falcons"], position:"LB", hof:false},
    {name:"Monte Taylor", teams:["Houston Texans"], position:"LB", hof:false},
    {name:"DeAndre Hopkins", teams:["Houston Texans","Arizona Cardinals","Tennessee Titans","Baltimore Ravens"], position:"WR", hof:false},
    {name:"Stefon Diggs", teams:["Buffalo Bills","San Francisco 49ers","New England Patriots"], position:"WR", hof:false},
    {name:"Julio Jones", teams:["Atlanta Falcons","Tennessee Titans","Buffalo Bills","Arizona Cardinals"], position:"WR", hof:false},
    {name:"Mike Evans", teams:["Tampa Bay Buccaneers"], position:"WR", hof:false},
    {name:"Adam Thielen", teams:["Minnesota Vikings","Carolina Panthers","Pittsburgh Steelers"], position:"WR", hof:false},
    {name:"Keenan Allen", teams:["Los Angeles Chargers","Chicago Bears"], position:"WR", hof:false},
    {name:"DK Metcalf", teams:["Seattle Seahawks"], position:"WR", hof:false},
    {name:"Marvin Harrison Jr.", teams:["Arizona Cardinals"], position:"WR", hof:false},
    {name:"CeeDee Lamb", teams:["Dallas Cowboys"], position:"WR", hof:false},
    {name:"A.J. Brown", teams:["Tennessee Titans","Philadelphia Eagles"], position:"WR", hof:false},
    {name:"Chris Godwin", teams:["Tampa Bay Buccaneers"], position:"WR", hof:false},
    {name:"Deebo Samuel", teams:["San Francisco 49ers"], position:"WR", hof:false},
    {name:"Tyreek Hill", teams:["Kansas City Chiefs","Miami Dolphins"], position:"WR", hof:false},
    {name:"Laviska Shenault Jr.", teams:["Jacksonville Jaguars","Carolina Panthers","New Orleans Saints"], position:"WR", hof:false},
    {name:"DeVonta Smith", teams:["Philadelphia Eagles"], position:"WR", hof:false},
    {name:"Rashod Bateman", teams:["Baltimore Ravens"], position:"WR", hof:false},
    {name:"Nico Collins", teams:["Houston Texans"], position:"WR", hof:false},
    {name:"Hunter Renfrow", teams:["Las Vegas Raiders","Green Bay Packers"], position:"WR", hof:false},
    {name:"Dalton Kincaid", teams:["Buffalo Bills"], position:"TE", hof:false},
    {name:"Evan Engram", teams:["New York Giants","Jacksonville Jaguars"], position:"TE", hof:false},
    {name:"George Kittle", teams:["San Francisco 49ers"], position:"TE", hof:false},
    {name:"Dallas Goedert", teams:["Philadelphia Eagles"], position:"TE", hof:false},
    {name:"T.J. Hockenson", teams:["Detroit Lions","Minnesota Vikings"], position:"TE", hof:false},
    {name:"Jonnu Smith", teams:["Tennessee Titans","New England Patriots","Atlanta Falcons"], position:"TE", hof:false},
    {name:"Hunter Henry", teams:["Los Angeles Chargers","New England Patriots"], position:"TE", hof:false},
    {name:"Austin Hooper", teams:["Atlanta Falcons","Cleveland Browns","Tennessee Titans"], position:"TE", hof:false},
    {name:"Robert Tonyan", teams:["Green Bay Packers","Kansas City Chiefs"], position:"TE", hof:false},
    {name:"Jasper Brinkley", teams:["Various Teams"], position:"LB", hof:false},
    {name:"Cameron Jordan", teams:["New Orleans Saints"], position:"DE", hof:false},
    {name:"Maxx Crosby", teams:["Las Vegas Raiders"], position:"DE", hof:false},
    {name:"Fletcher Cox", teams:["Philadelphia Eagles"], position:"DT", hof:false},
    {name:"Chris Jones", teams:["Kansas City Chiefs"], position:"DT", hof:false},
    {name:"Jeffery Simmons", teams:["Tennessee Titans"], position:"DT", hof:false},
    {name:"Aaron Donald", teams:["Los Angeles Rams"], position:"DT", hof:false},
    {name:"Minkah Fitzpatrick", teams:["Miami Dolphins","Pittsburgh Steelers"], position:"S", hof:false},
    {name:"Jamal Adams", teams:["New York Jets","Seattle Seahawks"], position:"S", hof:false},
    {name:"Marcus Williams", teams:["New Orleans Saints","Baltimore Ravens"], position:"S", hof:false},
    {name:"Tyrann Mathieu", teams:["Arizona Cardinals","Houston Texans","Kansas City Chiefs"], position:"S", hof:false},
    {name:"Eric Kendricks", teams:["Minnesota Vikings","Los Angeles Chargers"], position:"LB", hof:false},
    {name:"Blake Martinez", teams:["Green Bay Packers","New York Giants","San Francisco 49ers"], position:"LB", hof:false},
    {name:"Devin McCourty", teams:["New England Patriots"], position:"S", hof:false},
    {name:"Jalen Carter", teams:["Philadelphia Eagles"], position:"DT", hof:false},
    {name:"Jordan Davis", teams:["Philadelphia Eagles"], position:"DT", hof:false},
    {name:"Christian Wilkins", teams:["Miami Dolphins","Cleveland Browns"], position:"DT", hof:false},
    {name:"Kendall Fuller", teams:["Kansas City Chiefs","Washington Commanders","Denver Broncos"], position:"CB", hof:false},
    {name:"James Bradberry", teams:["Carolina Panthers","New York Giants","Philadelphia Eagles"], position:"CB", hof:false},
    {name:"Xavier Rhodes", teams:["Minnesota Vikings","Indianapolis Colts","Buffalo Bills","Dallas Cowboys"], position:"CB", hof:false},
    {name:"Byron Jones", teams:["Dallas Cowboys","Miami Dolphins","Jacksonville Jaguars"], position:"CB", hof:false},
    {name:"Jordyn Brooks", teams:["Seattle Seahawks"], position:"LB", hof:false},
    {name:"Juston Burris", teams:["New York Jets","Cleveland Browns","Arizona Cardinals","Denver Broncos"], position:"CB", hof:false},
    {name:"Logan Ryan", teams:["New England Patriots","Tennessee Titans","Buffalo Bills","San Francisco 49ers"], position:"CB", hof:false},
    {name:"Sterling Moore", teams:["New England Patriots","Dallas Cowboys"], position:"CB", hof:false},
    {name:"Curtis Riley", teams:["Tennessee Titans","New York Giants","Las Vegas Raiders","Atlanta Falcons"], position:"S", hof:false},
    {name:"C.J. Gardner-Johnson", teams:["Philadelphia Eagles","Detroit Lions","Chicago Bears"], position:"S", hof:false},
    {name:"Chauncey Gardner-Johnson", teams:["Philadelphia Eagles","Detroit Lions","Chicago Bears"], position:"S", hof:false},
  
  
];

// ================================================
// DUPLICATE REMOVER - PASTE HERE
// ================================================
const seenNames = new Set();
const playersFinal = players.filter(p => {
  if (seenNames.has(p.name)) return false;
  seenNames.add(p.name);
  return true;
});

// Map legacy team names to current franchises
function normalizeTeam(team){
  if(team === "Houston Oilers" || team === "Oilers") return "Titans"; // Oilers -> Titans
  return team;
}

// Normalize all players' teams
players.forEach(p => {
  p.teams = p.teams.map(normalizeTeam);
});

let rowCategories=[], colCategories=[], correctAnswers={}, usedPlayers = new Set();
let suggestionBox;

// Utility
function shuffleArray(arr){ let a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function getCategoryClass(category){ if(category==="HOF") return "hof"; if(positions.includes(category)) return "position"; return "team"; }
function seededRandom(seed){ var x=Math.sin(seed)*10000; return x-Math.floor(x); }
function seededShuffle(array, seed){ let arr=[...array]; for(let i=arr.length-1;i>0;i--){ const j=Math.floor(seededRandom(seed+i)*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function pickFromArraySeeded(array, seed){ return array[seed % array.length]; }

// Build table
function buildTable(){
  let table="<table><tr><th></th>";
  for(let c of colCategories){
    let cls=getCategoryClass(c), style="";
    if(cls==="team" && teamColors[c]) style=`style="background: linear-gradient(135deg, ${teamColors[c][0]}, ${teamColors[c][1]}); color:white;"`;
    table+=`<th class="category ${cls}" ${style}>${c}</th>`;
  }
  table+="</tr>";

  correctAnswers={};

  for(let r of rowCategories){
    let rowCls=getCategoryClass(r), style="";
    if(rowCls==="team" && teamColors[r]) style=`style="background: linear-gradient(135deg, ${teamColors[r][0]}, ${teamColors[r][1]}); color:white;"`;
    table+=`<tr><th class="category ${rowCls}" ${style}>${r}</th>`;
    for(let c of colCategories){
      const cellId=`cell-${r}-${c}`.replace(/\s/g,"");
      correctAnswers[cellId]=getPlayersForCell(r,c);
      table+=`<td><input type='text' id='${cellId}' class='cell-input' oninput='showSuggestions(this)'></td>`;
    }
    table+="</tr>";
  }
  table+="</table>";
  document.getElementById("grid-container").innerHTML=table;
}

// Get correct players
function getPlayersForCell(row,col){
  const rowCls=getCategoryClass(row), colCls=getCategoryClass(col);
  return players.filter(p=>{
    let rowMatch=false,colMatch=false;
    if(rowCls==="hof") rowMatch=p.hof;
    else if(rowCls==="position") rowMatch=p.position===row;
    else rowMatch=p.teams.includes(row);
    if(colCls==="hof") colMatch=p.hof;
    else if(colCls==="position") colMatch=p.position===col;
    else colMatch=p.teams.includes(col);
    return rowMatch && colMatch;
  }).map(p=>p.name);
}

// Autocomplete
function showSuggestions(input){
  hideSuggestions();
  const val=input.value.toLowerCase();
  if(!val) return;
  const matches = players.map(p=>p.name).filter(n=>n.toLowerCase().includes(val) && !usedPlayers.has(n));
  if(matches.length===0) return;

  suggestionBox=document.createElement("div");
  suggestionBox.className="suggestion-box";
  document.body.appendChild(suggestionBox);

  const rect=input.getBoundingClientRect();
  suggestionBox.style.left=rect.left+window.scrollX+"px";
  suggestionBox.style.top=rect.bottom+window.scrollY+"px";
  suggestionBox.style.minWidth=rect.width+"px";

  matches.forEach(m=>{
    const div=document.createElement("div");
    div.className="suggestion-item";
    div.textContent=m;
    div.onclick=e=>{
      input.value=m;
      hideSuggestions();
      input.focus();
      e.stopPropagation();
    };
    suggestionBox.appendChild(div);
  });
}

function hideSuggestions(){ if(suggestionBox){ suggestionBox.remove(); suggestionBox=null; } }
document.addEventListener("click", e=>{ if(suggestionBox && !suggestionBox.contains(e.target)) hideSuggestions(); });

// Check inputs
function checkCell(input){
  const ans=correctAnswers[input.id];
  const value=input.value.trim();
  if(!value){
    const available=ans.find(a=>!usedPlayers.has(a))||"";
    input.value=available;
    if(available) usedPlayers.add(available);
    input.classList.add("incorrect"); input.classList.remove("correct");
    return;
  }
  const match=ans.find(a=>a.toLowerCase()===value.toLowerCase());
  if(match){ input.classList.add("correct"); input.classList.remove("incorrect"); if(!usedPlayers.has(match)) usedPlayers.add(match); }
  else{
    input.classList.add("incorrect"); input.classList.remove("correct");
    const available=ans.find(a=>!usedPlayers.has(a))||"";
    input.value=available;
    if(available) usedPlayers.add(available);
  }
}

function checkAllAnswers(){ Object.keys(correctAnswers).forEach(id=>{ const input=document.getElementById(id); input.classList.remove("correct","incorrect"); checkCell(input); }); }

// Create grid (used by both modes)
function createGrid(isDaily=false, seed=0){
  usedPlayers = new Set();
  const hof = "HOF";
  const position = isDaily ? pickFromArraySeeded(positions, seed+1) : pickRandom(positions);
  const allTeams = isDaily ? seededShuffle(teams, seed) : shuffleArray(teams);

  const hofInRow = isDaily ? (seed % 2 === 0) : Math.random()<0.5;

  if(hofInRow){
    rowCategories = [hof, allTeams[0], allTeams[1]];
    colCategories = [position, allTeams[2], allTeams[3]];
  } else {
    rowCategories = [position, allTeams[0], allTeams[1]];
    colCategories = [hof, allTeams[2], allTeams[3]];
  }

  // Shuffle categories
  rowCategories = isDaily ? seededShuffle(rowCategories, seed+2) : shuffleArray(rowCategories);
  colCategories = isDaily ? seededShuffle(colCategories, seed+3) : shuffleArray(colCategories);

  buildTable();
}

// Unlimited Mode
function generateGrid(){ createGrid(false); }

// Daily Challenge
function loadDailyChallenge(){
  const today = new Date().toISOString().slice(0,10);
  const seed = parseInt(today.replace(/-/g,''));
  createGrid(true, seed);
}

// Initial load
document.addEventListener("DOMContentLoaded",()=>{ loadDailyChallenge(); });
