FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

COPY ["SpottedChartsAPI/SpottedChartsAPI.csproj", "SpottedChartsAPI/"]
COPY ["SpottedChartsAPIData/SpottedChartsAPIData.csproj", "SpottedChartsAPIData/"]
COPY ["SpottedChartsAPIDomain/SpottedChartsAPIDomain.csproj", "SpottedChartsAPIDomain/"]

RUN dotnet restore "SpottedChartsAPI/SpottedChartsAPI.csproj"
COPY . .

WORKDIR "/src/SpottedChartsAPI"
RUN dotnet build -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=build /app/build .

ENTRYPOINT ["dotnet", "SpottedChartsAPI.dll"]
