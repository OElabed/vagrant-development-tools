package com.app.model.product;

import com.app.model.response.PageResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper=false)
public class ProductResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Product> items;
}
