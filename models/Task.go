package models

import (
	"database/sql"
	"gorm.io/gorm"
)

type Task struct {
	gorm.Model
	Title       string        `gorm:"not null" json:"title"`
	Description string        `gorm:"not null" json:"description"`
	State       string        `gorm:"not null" json:"state"`
	GroupID     uint          `gorm:"not null" json:"group_id"`
	Group       Group         `gorm:"foreignKey:GroupID" json:"group"`
	UserID      sql.NullInt64 `gorm:"default:null" json:"user_id"`
	User        User          `gorm:"foreignKey:UserID" json:"user"`
}
