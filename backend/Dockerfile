FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["WebAppBackendTemplate.csproj", "./"]
RUN dotnet restore "./WebAppBackendTemplate.csproj"
COPY . .
RUN dotnet build "WebAppBackendTemplate.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WebAppBackendTemplate.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "WebAppBackendTemplate.dll" ]