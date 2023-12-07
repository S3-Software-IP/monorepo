using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using Moq;
using SpottedChartsAPI.Controllers;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPITests.Controllers
{
    public class SnapshotController_Test
    {
        private readonly Fixture _fixture;

        public SnapshotController_Test()
        {
            _fixture = new Fixture();
        }

        [Fact]
        public void GetAllById_ValidUserId_ReturnsOk()
        {
            // Arrange
            string spotifyUserId = "validUserId";
            var mockService = new Mock<ISnapshotService>();
            var mockUserService = new Mock<IUserService>();

            var mockSnapshots = _fixture.CreateMany<SnapshotDTO>().ToList();

            mockService.Setup(service => service.GetBySpotifyId(spotifyUserId))
                       .Returns(mockSnapshots);

            var controller = new SnapshotController(mockService.Object, mockUserService.Object);

            // Act
            var result = controller.GetAllBySpotifyId(spotifyUserId);

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        public void GetAllById_InvalidUserId_ReturnsBadRequest(string spotifyUserId)
        {
            // Arrange
            var mockService = new Mock<ISnapshotService>();
            var mockUserService = new Mock<IUserService>();

            var controller = new SnapshotController(mockService.Object, mockUserService.Object);

            // Act
            var result = controller.GetAllBySpotifyId(spotifyUserId);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public void GetSingleById_ValidSnapshotId_ReturnsOk()
        {
            // Arrange
            Guid snapshotId = Guid.NewGuid();
            var mockService = new Mock<ISnapshotService>();
            var mockUserService = new Mock<IUserService>();

            var mockSnapshot = _fixture.Create<SnapshotDTO>();

            mockService.Setup(service => service.GetById(snapshotId))
                       .Returns(mockSnapshot);

            var controller = new SnapshotController(mockService.Object, mockUserService.Object);

            // Act
            var result = controller.GetSingleById(snapshotId.ToString());

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        [Theory]
        [InlineData("invalidSnapshotId")]
        [InlineData("")]
        [InlineData(null)]
        public void GetSingleById_InvalidSnapshotId_ReturnsBadRequest(string snapshotId)
        {
            // Arrange
            var mockService = new Mock<ISnapshotService>();
            var mockUserService = new Mock<IUserService>();

            var controller = new SnapshotController(mockService.Object, mockUserService.Object);

            // Act
            var result = controller.GetSingleById(snapshotId);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result);

            var badRequestResult = result as BadRequestObjectResult;
            Assert.NotNull(badRequestResult);

            Assert.Equal("The passed snapshot UUID was invalid, poorly structured, or empty.", badRequestResult.Value);
        }
    }
}
