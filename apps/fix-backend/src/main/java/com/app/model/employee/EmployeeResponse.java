package com.app.model.employee;

import com.app.model.response.PageResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper=false)
public class EmployeeResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Employee> items;
}
