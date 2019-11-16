package com.psa.ranking.service.mapper;

import com.psa.ranking.domain.*;
import com.psa.ranking.service.dto.RosterDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Roster} and its DTO {@link RosterDTO}.
 */
@Mapper(componentModel = "spring", uses = {CategoryMapper.class, PlayerMapper.class})
public interface RosterMapper extends EntityMapper<RosterDTO, Roster> {

    @Mapping(source = "category.id", target = "categoryId")
    RosterDTO toDto(Roster roster);

    @Mapping(source = "categoryId", target = "category")
    @Mapping(target = "removePlayer", ignore = true)
    Roster toEntity(RosterDTO rosterDTO);

    default Roster fromId(Long id) {
        if (id == null) {
            return null;
        }
        Roster roster = new Roster();
        roster.setId(id);
        return roster;
    }
}
