using JSON_Schema_Test;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json.Schema.Generation;
using Newtonsoft.Json.Serialization;

Console.WriteLine("JSON validation schema test started!");

JSchemaGenerator generator = new JSchemaGenerator();
generator.ContractResolver = new CamelCasePropertyNamesContractResolver();

JSchema jsonSchema = generator.Generate(typeof(SpotifyRanking));

Console.WriteLine(jsonSchema.ToString());
