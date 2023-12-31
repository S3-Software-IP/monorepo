# Use a non-root user in the base image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
USER nobody:nogroup  # Change this line based on the appropriate non-root user for your image

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["SpottedChartsAPI/SpottedChartsAPI.csproj", "SpottedChartsAPI/"]
COPY ["SpottedChartsAPIData/SpottedChartsAPIData.csproj", "SpottedChartsAPIData/"]
COPY ["SpottedChartsAPIDomain/SpottedChartsAPIDomain.csproj", "SpottedChartsAPIDomain/"]
RUN dotnet restore "SpottedChartsAPI/SpottedChartsAPI.csproj"

# Explicitly copy only necessary files and directories
COPY ["SpottedChartsAPI/", "SpottedChartsAPI/"]
COPY ["SpottedChartsAPIData/", "SpottedChartsAPIData/"]
COPY ["SpottedChartsAPIDomain/", "SpottedChartsAPIDomain/"]

WORKDIR "/src/SpottedChartsAPI"
RUN dotnet build "SpottedChartsAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SpottedChartsAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app

# Create a new user named "appuser"
RUN adduser --disabled-password --gecos '' appuser

# Change ownership of the app directory to the new user
RUN chown -R appuser:appuser /app

# Switch to the new user
USER appuser

# Explicitly copy only necessary files and directories
COPY --from=publish /app/publish/SpottedChartsAPI.dll .

ENTRYPOINT ["dotnet", "SpottedChartsAPI.dll"]
