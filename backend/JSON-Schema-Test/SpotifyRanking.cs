using System.ComponentModel.DataAnnotations;
using static JSON_Schema_Test.Enums.Enums;

namespace JSON_Schema_Test;

public class SpotifyRanking
{
    [Required]
    [DataType(DataType.DateTime)]
    public string CreatedAt { get; set; }

    [Required]
    [MaxLength(40)]
    public string OwnerId { get; set; }

    [Required]
    [EnumDataType(typeof(RankingType))]
    public string Type { get; set; }

    [Required]
    [EnumDataType(typeof(TimeRangeType))]
    public string TimeRange { get; set; }

    [Required]
    [MinLength(1)]
    [MaxLength(50)]
    public List<Rank> Rankings { get; set; }
}
