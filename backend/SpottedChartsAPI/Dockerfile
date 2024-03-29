# Use a non-root user in the base image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

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

# Create a non-root user
RUN addgroup --system --gid 1000 appuser && \
    adduser --system --uid 1000 --ingroup appuser appuser && \
    chown -R appuser:appuser /app

# Switch to the non-root user
USER appuser

# Explicitly copy only necessary files and directories
COPY --from=publish /app/publish/SpottedChartsAPI.dll .

ENTRYPOINT ["dotnet", "SpottedChartsAPI.dll"]
