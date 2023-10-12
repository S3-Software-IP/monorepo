using System.ComponentModel.DataAnnotations;

namespace JSON_Schema_Test;

public class Rank
{
    [Required]
    [MaxLength(64)]
    public string Id { get; set; }
}
