using AutoFixture;
using Moq;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;
using SpottedChartsAPIDomain.Services;

namespace SpottedChartsAPITests.Services;

public class SnapshotService_Test
{
    private readonly Fixture _fixture;

    public SnapshotService_Test()
    {
        _fixture = new Fixture();
    }

    [Fact]
    public void GetBySpotifyId_ReturnsSnapshotsForUser()
    {
        // Arrange
        string spotifyUserId = "testUser";
        var mockRepository = new Mock<ISnapshotRepository>();
        var mockUserService = new Mock<IUserService>();

        var mockSnapshots = _fixture.CreateMany<SnapshotDTO>().ToList();

        mockRepository.Setup(repo => repo.GetByUserId(spotifyUserId))
                      .Returns(mockSnapshots);

        var snapshotService = new SnapshotService(mockRepository.Object, (IUserService)mockUserService);

        // Act
        var result = snapshotService.GetBySpotifyId(spotifyUserId);

        // Assert
        Assert.NotNull(result);
    }

    [Fact]
    public void GetBySpotifyId_ReturnsNullIfEmpty()
    {
        // Arrange
        string spotifyUserId = "testUser";
        var mockRepository = new Mock<ISnapshotRepository>();
        var mockUserService = new Mock<UserService>();
        List<SnapshotDTO> repositoryReturnTest = null;

        mockRepository.Setup(repo => repo.GetByUserId(spotifyUserId))
            .Returns(repositoryReturnTest);

        var snapshotService = new SnapshotService(mockRepository.Object, (IUserService)mockUserService);

        // Act
        var result = snapshotService.GetBySpotifyId(spotifyUserId);

        // Assert
        Assert.Null(result);
    }
}
