using Backend.Data;
using Backend.GlobalDtos;
using Microsoft.AspNetCore.Mvc;

namespace Backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAngularOrigins",
                    builder =>
                    {
                        builder.WithOrigins(
                                "http://localhost:4200"
                            )
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            var app = builder.Build();
            app.UseCors("AllowAngularOrigins");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            
            app.MapGet("/api/v1/employeePay", (HttpContext httpContext) =>
            {
                return DataContext.EmployeePayments;
            });

            app.MapGet("/api/v1/employeePay/{id}", (HttpContext httpContext, string id) =>
            {
                return DataContext.EmployeePayments.First(x => x.Id == id);
            });

            app.MapPost("/api/v1/employeePay", (HttpContext httpContext, EmployeePayment updatedEmployeePayment) =>
            {
                var employeePayment = DataContext.EmployeePayments.SingleOrDefault(x => x.Id == updatedEmployeePayment.Id);

                if (employeePayment == null)
                {
                    return Results.BadRequest("updatedEmployeePayment was not found in context. If you are trying to create a new object use http method put instead");
                }

                DataContext.EmployeePayments[DataContext.EmployeePayments.IndexOf(employeePayment)] =
                    updatedEmployeePayment;
                return Results.Ok();
            });

            app.MapPut("/api/v1/employeePay", (HttpContext httpContext, [FromBody] CreateEmployeeRouteDto employeePayment) =>
            {
                DataContext.EmployeePayments.Add(new EmployeePayment(employeePayment.FirstName, employeePayment.LastName, employeePayment.MonthlyPay));
                //TODO consider to use Results.Created();
                return Results.Ok();
            });

            app.MapDelete("/api/v1/employeePay/{employeePaymentId}", (HttpContext httpContext, string employeePaymentId) =>
            {
                var employeePayment = DataContext.EmployeePayments.SingleOrDefault(x => x.Id == employeePaymentId);
                
                if (employeePayment == null)
                {
                    return Results.BadRequest("No record with specified id");
                }

                DataContext.EmployeePayments.RemoveAt(DataContext.EmployeePayments.IndexOf(employeePayment));
                return Results.Ok();
            });

            app.Run();
        }
    }
}