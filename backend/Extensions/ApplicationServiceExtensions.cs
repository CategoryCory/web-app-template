using Microsoft.EntityFrameworkCore;
using WebAppBackendTemplate.Data;

namespace WebAppBackendTemplate.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection ConfigureCors(this IServiceCollection services, IConfiguration config)
    {
        var corsOrigins = config["CorsOrigins"];

        services.AddCors(options => 
        {
            options.AddPolicy("CorsPolicy",
                builder => builder
                    .WithOrigins(corsOrigins!)
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
        });

        return services;
    }

    public static IServiceCollection ConfigureDatabase(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseNpgsql(config.GetConnectionString("AppConnection"));
        });

        return services;
    }

    public static IServiceCollection ConfigureLocalServices(this IServiceCollection services)
    {
        // Add services here

        return services;
    }
}