package com.psa.ranking.service.dto;
import io.swagger.annotations.ApiModel;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.psa.ranking.domain.Province} entity.
 */
@ApiModel(description = "Province entity.\n@author Marcelo Miño\nDatos traidos desde https:")
public class ProvinceDTO implements Serializable {

    private Long id;

    private String name;


    private Long countryId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCountryId() {
        return countryId;
    }

    public void setCountryId(Long countryId) {
        this.countryId = countryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProvinceDTO provinceDTO = (ProvinceDTO) o;
        if (provinceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), provinceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ProvinceDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", country=" + getCountryId() +
            "}";
    }
}
