package br.com.aula.exemplo.core.config;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableCaching(proxyTargetClass = true)
@EnableScheduling
public class GeneralConfig {
}
