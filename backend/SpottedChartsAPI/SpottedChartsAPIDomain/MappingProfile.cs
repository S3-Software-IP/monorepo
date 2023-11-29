using AutoMapper;
using Newtonsoft.Json;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Models;
using SpottedChartsAPIDomain.Models.SnapshotsContent;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Snapshot, SnapshotDTO>()
            .ForMember(dest => dest.Artists, opt => opt.MapFrom(src => JsonConvert.DeserializeObject<List<ArtistSnapshotsContent>>(src.ArtistSnapshot)))
            .ForMember(dest => dest.Songs, opt => opt.MapFrom(src => JsonConvert.DeserializeObject<List<SongSnapshotsContent>>(src.SongSnapshot)))
            .ForMember(dest => dest.Genres, opt => opt.MapFrom(src => JsonConvert.DeserializeObject<List<GenreSnapshotContent>>(src.GenreSnapshot)));

        CreateMap<SnapshotDTO, Snapshot>()
           .ForMember(dest => dest.ArtistSnapshot, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Artists)))
           .ForMember(dest => dest.SongSnapshot, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Songs)))
           .ForMember(dest => dest.GenreSnapshot, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Genres)));


        CreateMap<User, UserDTO>();
        CreateMap<UserDTO, User>();

    }
}
