package com.michaelcanonizado.utils;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public class UserHelper {
    public static String getSingleValue(Map<String, List<String>> attributes, String key) {
        return Optional.ofNullable(attributes.get(key))
                .filter(list -> !list.isEmpty())
                .map(list -> list.getFirst())
                .orElse(null);
    }
}
